from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Order, OrderItem
from shops.models import Product
from users.models import CustomUser
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def add_to_cart(request, user_id, product_id, quantity):
    user = get_object_or_404(CustomUser, pk=user_id)
    product = get_object_or_404(Product, pk=product_id)

    cart_order = Order.objects.filter(user=user, is_cart=True).first()

    if cart_order:
        # Check if the product already exists in the cart
        order_item = cart_order.orderitem_set.filter(product=product).first()

        if order_item:
            # Update the quantity if the product already exists
            order_item.quantity += int(quantity)  # Convert quantity to integer
            order_item.save()
        else:
            # Create a new order item if the product is not in the cart
            OrderItem.objects.create(order=cart_order, product=product, quantity=int(quantity))

        # Update the total price of the cart order
        cart_order.total_price += product.price * int(quantity)
        cart_order.save()
    else:
        # Create a new cart order with the product and quantity
        cart_order = Order.objects.create(user=user, total_price=product.price * int(quantity), is_cart=True)
        OrderItem.objects.create(order=cart_order, product=product, quantity=int(quantity))
    
    # Return a JSON response indicating success
    return JsonResponse({'status': 'success', 'message': f'{quantity} product(s) added to cart successfully'})



def get_user_products(request, user_id):
    user = get_object_or_404(CustomUser, pk=user_id)
    orders = Order.objects.filter(user=user, is_cart=True)  # Fetching all cart orders for the user

    user_products = []
    for order in orders:
        products_in_order = order.products.all()
        for product in products_in_order:
            user_products.append({
                'product_id': product.id,
                'product_name': product.product_name,
                'quantity': order.orderitem_set.get(product=product).quantity,  # Get quantity from OrderItem
                'price': product.price,
                'total_price': product.price * order.orderitem_set.get(product=product).quantity,  # Calculate total price
            })

    return JsonResponse({'user_products': user_products})

@csrf_exempt
def process_cart_to_order(request, user_id):
    user = get_object_or_404(CustomUser, id=user_id)
    
    # Get the user's existing cart (if any)
    existing_cart = user.order_set.filter(is_cart=True).first()
    if existing_cart:
        # Update the existing cart to set is_cart=False and status='Pending'
        existing_cart.is_cart = False
        existing_cart.status = 'Pending'
        existing_cart.save()
        return JsonResponse({'message': 'Existing cart updated successfully', 'cart_id': existing_cart.id})
    else:
        return JsonResponse({'error': 'No existing cart to update'})