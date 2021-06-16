from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.serializers import Serializer
from .serializer import *
from .models import BGP_Class, Department, Grad_Class, Profile

class ProfileCreateApi(generics.CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileCreateSerializer

class ProfileApi(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileListSerializer

class ProfileUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileUpdateSerializer

class ProfessionsCreateApi(generics.CreateAPIView):
    queryset = Professions.objects.all()
    serializer_class = ProfessionsSerializer

class ProfessionsApi(generics.ListAPIView):
    queryset = Professions.objects.all()
    serializer_class = ProfessionsSerializer

class ProfessionsUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Professions.objects.all()
    serializer_class = ProfessionsSerializer

class ProfessionsDeleteApi(generics.DestroyAPIView):
    queryset = Professions.objects.all()
    serializer_class = ProfessionsSerializer

class DepartmentCreateApi(generics.CreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentApi(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDeleteApi(generics.DestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class Grad_ClassCreateApi(generics.CreateAPIView):
    queryset = Grad_Class.objects.all()
    serializer_class = Grad_ClassSerializer

class Grad_ClassApi(generics.ListAPIView):
    queryset = Grad_Class.objects.all()
    serializer_class = Grad_ClassSerializer

class Grad_ClassUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = Grad_Class.objects.all()
    serializer_class = Grad_ClassSerializer

class Grad_ClassDeleteApi(generics.DestroyAPIView):
    queryset = Grad_Class.objects.all()
    serializer_class = Grad_ClassSerializer

class BGP_ClassCreateApi(generics.CreateAPIView):
    queryset = BGP_Class.objects.all()
    serializer_class = BGP_ClassSerializer

class BGP_ClassApi(generics.ListAPIView):
    queryset = BGP_Class.objects.all()
    serializer_class = BGP_ClassSerializer

class BGP_ClassUpdateApi(generics.RetrieveUpdateAPIView):
    queryset = BGP_Class.objects.all()
    serializer_class = BGP_ClassSerializer

class BGP_ClassDeleteApi(generics.DestroyAPIView):
    queryset = BGP_Class.objects.all()
    serializer_class = BGP_ClassSerializer