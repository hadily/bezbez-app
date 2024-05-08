from django.urls import path

from .views import ShopSignupView,ProductListView,ProductDetailView
urlpatterns = [
    path('signup/', ShopSignupView.as_view(), name='shop_signup'),
        path('products/', ProductListView.as_view(), name='product-list'),
            path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),


    
]
