from rest_framework import  serializers
from .models import Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username', 'email')

class ProfileListSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(many=False)
    class Meta:
        model = Profile
        fields = ('bgp_class','mobile','email','created_by','created_at')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'