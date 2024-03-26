from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    pass  # Define custom user manager methods as needed

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=100)
    address = models.ForeignKey('Address', on_delete=models.CASCADE, null=True, related_name='addresses')
    image = models.ImageField(upload_to='profile/', null=True)

    objects = CustomUserManager()  # Assign the custom user manager

    def __str__(self):
        return self.username

class Address(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_addresses')
    address = models.CharField(max_length=255, verbose_name='Address')
    city = models.CharField(max_length=100, verbose_name='City')
    country = models.CharField(max_length=100, verbose_name='Country')
    zip_code = models.CharField(max_length=20, verbose_name='ZIP Code')

    def __str__(self):
        return f"{self.address}, {self.city}, {self.country} - {self.zip_code}"
