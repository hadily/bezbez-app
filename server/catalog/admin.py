from django.contrib import admin
from .models import Color, Size, Product, Category,VariantCategory
class ColorAdmin(admin.ModelAdmin):
    list_display = ('name',)

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title',)

class SizeAdmin(admin.ModelAdmin):
    list_display = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'added_date', 'price', 'featured')

class VariantCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
   

admin.site.register(Color, ColorAdmin)
admin.site.register(Size, SizeAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(VariantCategory,VariantCategoryAdmin)
