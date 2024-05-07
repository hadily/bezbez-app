from django.urls import path
from .views import user_and_shop_signup
urlpatterns = [
    path('signup/', user_and_shop_signup, name='api_signup'),
    
]
