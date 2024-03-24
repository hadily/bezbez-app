from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Address, CustomUser

User = get_user_model()

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('address', 'city', 'country', 'zip_code')  # Adjusted to match the model field name

class SignupSerializer(serializers.ModelSerializer):
    address = AddressSerializer(required=False)

    class Meta:
        model = CustomUser
        fields = ['email', 'username', 'password', 'phone', 'address', 'image']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        address_data = validated_data.pop('address', None)
        user = CustomUser.objects.create_user(**validated_data)
        
        if address_data:
            Address.objects.create(user=user, **address_data)  # Pass 'user' explicitly to associate with the user

        return user
