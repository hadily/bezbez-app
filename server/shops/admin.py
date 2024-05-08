from django.contrib import admin
from .models import Shop, Category, Color, Product

# Register your models here
@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner')
    search_fields = ('name', 'owner__username')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)  # Make sure to include a comma to indicate a tuple
    search_fields = ('name',)  # Make sure to include a comma to indicate a tuple


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('code',)  # Make sure to include a comma to indicate a tuple
    search_fields = ('code',)  # Make sure to include a comma to indicate a tuple

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'shop', 'price',)
    search_fields = ('product_name', 'shop__name')
