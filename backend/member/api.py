from rest_framework import generics, permissions
from rest_framework.response import Response
from .serializer import ProfileSerializer, ProfileListSerializer
from .models import Profile

# Profile Create API
class ProfileCreateApi(generics.CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

# Profile List API
class ProfileListApi(generics.ListAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    queryset = Profile.objects.all()
    serializer_class = ProfileListSerializer

# Employe Update API
class ProfileUpdateApi(generics.RetrieveUpdateAPIView):
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

"""
# Employee Delete API
class EmployeeDeleteApi(generics.DestroyAPIView):=
   queryset = Employees.objects.all()
   serializer_class = EmployeeSerializer
"""