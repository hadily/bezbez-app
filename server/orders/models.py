from django.db import models


from django.db import models
from users.models import CustomUser 
from shops.models import Product , Address


class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem') 
    shipping_address = models.ForeignKey(Address, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_ordered = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100)

    def __str__(self):
        return f"Order #{self.id} by {self.user.user.username} - Total Price: {self.total_price}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"Order #{self.order_id} - {self.quantity} x {self.product.product_name}"
