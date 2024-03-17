from django.shortcuts import render
from .models import Shop

def shop_detail(request, shop_id):
    shop = Shop.objects.get(id=shop_id)
    return render(request, 'shop/shop_detail.html', {'shop': shop})
