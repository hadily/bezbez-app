# Generated by Django 5.0.2 on 2024-05-08 01:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0002_remove_order_shipping_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='is_cart',
            field=models.BooleanField(default=True),
        ),
    ]