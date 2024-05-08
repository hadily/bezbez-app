from django.db import models
from users.models import CustomUser 
from shops.models import Product 

class Order(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, through='OrderItem') 
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    date_ordered = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100)
    is_cart = models.BooleanField(default=True)  # Added is_cart field


    def __str__(self):
        return f"Order #{self.id} by {self.user.username} - Total Price: {self.total_price}"  # Updated to use self.user.username instead of self.user.user.username

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"Order #{self.order_id} - {self.quantity} x {self.product.product_name}"
