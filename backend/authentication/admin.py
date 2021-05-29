from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .serializer import RegisterSerializer, UserSerializer
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['id', 'username', 'password', 'email']

admin.site.register(CustomUser, CustomUserAdmin)