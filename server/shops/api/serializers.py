from rest_framework import serializers
from ..models import Shop

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ['id', 'owner', 'name', 'address', 'phone', 'email', 'image', 'description', 'slug']
        read_only_fields = [ 'owner', 'slug']

    def create(self, validated_data):
        """
        Create and return a new Shop instance, setting the owner to the authenticated user.
        """
        request = self.context.get('request')
        owner = request.user if request and hasattr(request, 'user') else None
        shop = Shop.objects.create(owner=owner, **validated_data)
        return shop
