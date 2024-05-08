from rest_framework import serializers
from users.models import CustomUser
from ..models import Shop
from ..models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'  # You can specify specific fields if needed

class ShopSignupSerializer(serializers.ModelSerializer):
    # Include fields for user creation
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)  # Set write_only for password

    class Meta:
        model = Shop
        fields = ['name', 'email', 'description', 'username', 'password']

    def create(self, validated_data):
        # Extract user data from validated_data
        user_data = {
            'username': validated_data.pop('username'),
            'email': validated_data.pop('email'),
            'password': validated_data.pop('password')
        }

        # Create the user using CustomUser model
        user = CustomUser.objects.create_user(**user_data)

        # Create the shop with the user as the owner
        shop = Shop.objects.create(owner=user, **validated_data)
        return shop