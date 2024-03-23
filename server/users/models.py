# users/models.py
from django.db import models
from django.contrib.auth.models import User

class CustomUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=100)
    address = models.ForeignKey('Address', on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='profile/', null=True)
    
    def __str__(self):
        return self.user.username

class Address(models.Model):
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    date_added = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.address
      
    class Meta:
        verbose_name_plural = "Addresses"
 
