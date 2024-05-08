from django.http import Http404
from users.models import CustomUser
from rest_framework.decorators import api_view
from users.api.serializers import SignupSerializer
from rest_framework.response import Response
from rest_framework import  status

from shops.api.serializers import  ShopSignupSerializer, ProductSerializer
from rest_framework.views import APIView
from shops.models import Product
from rest_framework.generics import RetrieveAPIView

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_object(self):
        try:
            # Retrieve the product ID from the URL parameter
            product_id = self.kwargs.get('pk')
            # Get the product object by ID
            product = self.queryset.get(id=product_id)
            return product
        except Product.DoesNotExist:
            raise Http404("Product does not exist")

    def get(self, request, *args, **kwargs):
        # Get the product object using the get_object method
        product = self.get_object()
        # Serialize the product object
        serializer = self.get_serializer(product)
        return Response(serializer.data)

    def put(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def delete(self, request, *args, **kwargs):
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)

class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class ShopSignupView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ShopSignupSerializer(data=request.data)
        if serializer.is_valid():
            # Save the shop with user creation handled in the serializer
            shop = serializer.save()
            return Response({'success': 'Shop and user created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)