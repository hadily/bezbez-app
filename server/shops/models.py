from django.db import models
from django.contrib.auth.models import User
from jupyterlab_server import slugify
from ckeditor.fields import RichTextField
from users.models import Address  # Correct import statement for Address model

class Shop(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    address = models.ForeignKey(Address, on_delete=models.CASCADE, null=True)  # Use Address model directly
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    image = models.ImageField(upload_to='shop/', null=True)
    description = RichTextField(null=True)
    slug = models.SlugField(default='', max_length=500, null=True, blank=True)

    def __str__(self):
        return self.name

class MainCategory(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    class Meta:
        verbose_name_plural = "MainCategories"

class Category(models.Model):
    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f"{self.name} --- {self.main_category.name}"
    class Meta:
        verbose_name_plural = "Categories"
    
class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "SubCategories"
    
    def __str__(self):
        return f"{self.category.main_category.name} --- {self.category.name} --- {self.name}"

class Color(models.Model):
    code = models.CharField(max_length=100)
    
    def __str__(self):
        return self.code

class Product(models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    total_quantity = models.IntegerField()
    availability = models.IntegerField()
    feature_img = models.CharField(max_length=100)
    product_name = models.CharField(max_length=100)
    price = models.IntegerField()
    discount = models.IntegerField()
    product_information = RichTextField(null=True)   
    categories = models.ForeignKey(Category, on_delete=models.CASCADE)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, null=True)
    tags = models.CharField(max_length=100)
    description = RichTextField(null=True)
    slug = models.SlugField(default='', max_length=500, null=True, blank=True)
    
    def __str__(self): 
        return self.article_name

    def get_absolute_url(self):
        from django.urls import reverse
        return reverse("article_detail", kwargs={'slug': self.slug})

    
def create_slug(instance, new_slug=None):
    slug = slugify(instance.article_name)
    if new_slug is not None:
        slug = new_slug
    qs = Product.objects.filter(slug=slug).order_by('-id')
    exists = qs.exists()
    if exists:
        new_slug = f"{slug}-{qs.first().id}"
        return create_slug(instance, new_slug=new_slug)
    return slug
