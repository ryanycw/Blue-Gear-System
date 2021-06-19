from rest_framework import  serializers
from rest_framework.permissions import IsAuthenticated
from django.db import models
from .models import CustomUser
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

 # Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id','email','username','password', )
        extra_kwargs = {
            'password':{'write_only': True},
        }
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(validated_data['username'], validated_data['email'], password = validated_data['password'],)
        return user

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'