# api/views.py
from venv import logger
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

from ..models import CustomUser
from .serializers import SignupSerializer, UpdateProfileSerialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .serializers import ChangePasswordSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication 

from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.backends import ModelBackend
from users.models import CustomUser  # Import your CustomUser model


class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None:
            return None

        try:
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        else:
            return None

class UserLogin(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        # Get the username_or_email and password from the request data
        username_or_email = request.data.get('username_or_email')
        password = request.data.get('password')

        if username_or_email is None or password is None:
            return Response({'error': 'Both username_or_email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Authenticate using custom email backend
        user = authenticate(request, username=username_or_email, password=password)

        if user is not None and user.is_active:
            # User authenticated successfully, generate token
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
          
            })
        else:
            # Invalid credentials or inactive user
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    def get_authenticators(self):
        # Override get_authenticators to add EmailBackend for email-based authentication
        authenticators = super().get_authenticators()
        authenticators.insert(0, EmailBackend())  # Add EmailBackend as the first authenticator
        return authenticators
@api_view(['POST'])
def user_signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']

        if CustomUser.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)


        serializer.save()
        return Response({'detail': 'Signup successful'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class ChangePasswordView(APIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        old_password = serializer.validated_data.get('old_password')
        new_password = serializer.validated_data.get('new_password')
        confirm_new_password = serializer.validated_data.get('confirm_new_password')

        user = request.user
        if not user.check_password(old_password):
            return Response({'error': 'Invalid old password'}, status=status.HTTP_400_BAD_REQUEST)

        if new_password != confirm_new_password:
            return Response({'error': 'New passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        user.set_password(new_password)
        user.save()
        Token.objects.filter(user=user).delete()

        return Response({'detail': 'Password changed successfully'}, status=status.HTTP_200_OK)
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            old_password = serializer.data.get('old_password')
            new_password = serializer.data.get('new_password')
            confirm_new_password = serializer.data.get('confirm_new_password')

            if new_password != confirm_new_password:
                return Response({'error': 'New passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

            user = request.user
            if not user.check_password(old_password):
                return Response({'error': 'Invalid old password'}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()
            Token.objects.filter(user=user).delete()    
            return Response({'detail': 'Password changed successfully'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
class UpdateProfileview(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = UpdateProfileSerialize(data=request.data)
        if serializer.is_valid():
            user = request.user
            user.phone = serializer.data.get('phone')
            user.save()

            return Response({'detail': 'Profile updated successfully'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)