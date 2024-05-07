from django.shortcuts import render

from django.http import JsonResponse
from .models import Product

def get_products(request):
    products = Product.objects.all()
    data = {
        'products': list(products.values())  # Convert queryset to list of dictionaries
    }
    return JsonResponse(data)