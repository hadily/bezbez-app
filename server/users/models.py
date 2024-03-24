from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone
from django.contrib.auth import get_user_model



class CustomUser(AbstractUser):
    phone = models.CharField(max_length=100)
    address = models.ForeignKey('Address', on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='profile/', null=True)

    # Use CustomUserManager for managing CustomUser instances
   

    def __str__(self):
        return self.username


class Address(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='addresses')
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.country} - {self.zip_code}"
