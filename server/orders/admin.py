from django.contrib import admin
from .models import Order, OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    inlines = (OrderItemInline,)
    list_display = ('id', 'user', 'shipping_address', 'total_price', 'date_ordered', 'status')
    list_filter = ('date_ordered', 'status')
    search_fields = ('user__user__username', 'shipping_address__address')

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if not request.user.is_superuser:
            qs = qs.filter(user=request.user.customuser)
        return qs

    def save_model(self, request, obj, form, change):
        if not obj.id:
            obj.user = request.user.customuser
        super().save_model(request, obj, form, change)

# Register the models and their respective admin classes
admin.site.register(Order, OrderAdmin)
admin.site.register(OrderItem)
