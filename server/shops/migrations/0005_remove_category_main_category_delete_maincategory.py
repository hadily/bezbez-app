# Generated by Django 5.0.2 on 2024-05-07 20:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shops', '0004_remove_shop_email_remove_shop_phone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='main_category',
        ),
        migrations.DeleteModel(
            name='MainCategory',
        ),
    ]
