from rest_framework import serializers
from django.contrib.auth import get_user_model
from ..models import Address, CustomUser

User = get_user_model()

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('address', 'city', 'country', 'zip_code')  # Adjusted to match the model field name


class SignupSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'phone', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user_manager = User.objects
        return user_manager.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password'],
            phone=validated_data['phone'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    confirm_new_password = serializers.CharField(required=True)
class UpdateProfileSerialize(serializers.Serializer):
    phone = serializers.CharField(required=True)
    address = AddressSerializer(required=True)
    