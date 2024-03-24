
# api/urls.py
from django.urls import path
from .views import user_login,user_signup

urlpatterns = [
    path('login/', user_login, name='api_login'),
     path('signup/', user_signup, name='api_signup'),

    # Add more API endpoints as needed
]
