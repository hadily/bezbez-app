# api/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

from ..models import CustomUser
from .serializers import SignupSerializer


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
