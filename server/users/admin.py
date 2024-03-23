from django.contrib import admin
from .models import CustomUser, Address

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone', 'address', 'image')

class AddressAdmin(admin.ModelAdmin):
    list_display = ('address', 'city', 'country', 'zip', 'date_added')

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Address, AddressAdmin)
