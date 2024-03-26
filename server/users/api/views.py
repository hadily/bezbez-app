# api/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

from ..models import CustomUser
from .serializers import SignupSerializer
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


class UserLogin(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })


@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user:
        return Response({'detail': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
@api_view(['POST'])
def user_signup(request):
    serializer = SignupSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        phone = serializer.validated_data['phone']

        if CustomUser.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        if CustomUser.objects.filter(phone=phone).exists():
            return Response({'error': 'Phone number already exists'}, status=status.HTTP_400_BAD_REQUEST)

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