from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password, **extra_fields)

class CustomUser(AbstractUser):
    phone = models.CharField(max_length=100)
   # address = models.ForeignKey('Address', on_delete=models.CASCADE, null=True, related_name='addresses')
    image = models.ImageField(upload_to='profile/', null=True)

    objects = CustomUserManager()  # Assign the custom user manager

    def __str__(self):
        return self.username

class Address(models.Model):
    address = models.CharField(max_length=255, verbose_name='Address')
    city = models.CharField(max_length=100, verbose_name='City')
    country = models.CharField(max_length=100, verbose_name='Country')
    zip_code = models.CharField(max_length=20, verbose_name='ZIP Code')

    def __str__(self):
        return f"{self.address}, {self.city}, {self.country} - {self.zip_code}"
