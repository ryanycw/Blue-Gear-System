from .models import BGP_Class, Department, Grad_Class, Professions, Profile
from rest_framework import serializers

class ProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ['email']

class ProfessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professions
        fields = '__all__'

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class Grad_ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grad_Class
        fields = '__all__'

class BGP_ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = BGP_Class
        fields = '__all__'