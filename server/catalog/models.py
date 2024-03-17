from django.db import models
from django.core.validators import MinValueValidator
from imagekit.models import ProcessedImageField
from shop.models import Shop

class Category(models.Model):
    title = models.CharField(max_length=50)

class Color(models.Model):
    name = models.CharField(max_length=50)

class VariantCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    sizes_v = models.ManyToManyField('Size')  # Use string reference to avoid circular import

class Size(models.Model):
    name = models.CharField(max_length=50)

class Product(models.Model):
    shop = models.ForeignKey(Shop, related_name='products', on_delete=models.CASCADE)
    sizes_p = models.ManyToManyField(Size)
    var_category = models.ForeignKey(VariantCategory, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    added_date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    price = models.FloatField(validators=[MinValueValidator(0.1)])
    colors = models.ManyToManyField(Color)
    cover = ProcessedImageField(upload_to='products/product-cover-images/', format='JPEG', options={'quality': 60})
    featured = models.BooleanField(default=False)
    updated = models.DateField(auto_now=True)
    created = models.DateField(auto_now_add=True)  # Fixed: Added closing parenthesis
