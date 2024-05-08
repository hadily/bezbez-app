# api/urls.py
from django.urls import path

from .views import add_to_cart,get_user_products, process_cart_to_order

urlpatterns = [
    path('add-to-cart/<int:user_id>/<int:product_id>/<int:quantity>', add_to_cart, name='add_to_cart'),
    path('get-user-products/<int:user_id>/', get_user_products, name='get_user_products'),
    path('process-cart/<int:user_id>/', process_cart_to_order, name='process-cart'),


]


