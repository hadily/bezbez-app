from django.contrib import admin
from .models import Shop, MainCategory, Category, SubCategory, Color, Product

# Register your models here
@admin.register(Shop)
class ShopAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'phone', 'email')
    search_fields = ('name', 'owner__username', 'phone', 'email')

@admin.register(MainCategory)
class MainCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'main_category',)
    search_fields = ('name', 'main_category__name')

@admin.register(SubCategory)
class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'category',)
    search_fields = ('name', 'category__name')

@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ('code',)
    search_fields = ('code',)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'shop', 'price', 'availability')
    search_fields = ('product_name', 'shop__name')

# You can customize the admin classes and fields as needed
