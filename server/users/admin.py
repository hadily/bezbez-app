from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Address

class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'email', 'phone']  # Adjust fields as needed


class AddressAdmin(admin.ModelAdmin):
    list_display = ('address', 'city', 'country', 'zip_code')
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Address, AddressAdmin)
