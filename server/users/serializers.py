
from rest_framework import serializers
from .models import CustomUser, Shop, Address

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['address', 'city', 'country', 'zip_code']
