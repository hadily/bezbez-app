
# api/urls.py
from django.urls import path
from .views import user_signup,ChangePasswordView,UserLogin,LogoutView,UpdateProfileview

urlpatterns = [
    path('login/',UserLogin.as_view(), name='api_login'),
    path('signup/', user_signup , name='api_signup'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('update-profile/', UpdateProfileview.as_view(), name='update-profile')
]
