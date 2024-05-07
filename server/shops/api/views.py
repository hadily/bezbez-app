from users.models import CustomUser
from rest_framework.decorators import api_view
from users.api.serializers import SignupSerializer
from rest_framework.response import Response
from rest_framework import  status

from shops.api.serializers import ShopSerializer


@api_view(['POST'])
def user_and_shop_signup(request):
    user_data = request.data.get('user', {})
    shop_data = request.data.get('shop', {})
    address_data = request.data.get('address', {})  # Assuming address data is included in the request

    if not user_data or not shop_data or not address_data:
        return Response({'error': 'Incomplete data provided'}, status=status.HTTP_400_BAD_REQUEST)

    user_serializer = SignupSerializer(data=user_data)
    shop_serializer = ShopSerializer(data=shop_data)

    if user_serializer.is_valid() and shop_serializer.is_valid():
        email = user_serializer.validated_data['email']

        if CustomUser.objects.filter(email=email).exists():
            return Response({'error': 'Email already exists'}, status=status.HTTP_409_CONFLICT)

        user = user_serializer.save()
        shop_data['address'] = address_data  
        shop_data['owner'] = user.id  # Assuming Shop model has a field for owner (ForeignKey to CustomUser)
        shop_serializer = ShopSerializer(data=shop_data)
        if shop_serializer.is_valid():
            shop = shop_serializer.save()
            return Response({'detail': 'User and shop created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': 'Invalid shop data'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        errors = {}
        if not user_serializer.is_valid():
            errors.update(user_serializer.errors)
        if not shop_serializer.is_valid():
            errors.update(shop_serializer.errors)

        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
