from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from jupyterlab_server import slugify
from ckeditor.fields import RichTextField
from users.models import Address  # Correct import statement for Address model

class Shop(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)  # Use Address model directly
    image = models.ImageField(upload_to='shop/', null=True)
    description = RichTextField(null=True)

    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=100)
    7
    class Meta:
        verbose_name_plural = "Categories"
    


class Color(models.Model):
    code = models.CharField(max_length=100)
    
    def __str__(self):
        return self.code

class Product(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    feature_img = models.CharField(max_length=100,blank=True)
    product_name = models.CharField(max_length=100)
    price = models.IntegerField()
    product_information = RichTextField(null=True)   
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description =models.CharField(max_length=100,blank=True)
    


    
