from django.conf.urls import url
from django.urls import path, include
from .api import *

urlpatterns = [
    path('api/',ProfileApi.as_view()),
    path('api/create',ProfileCreateApi.as_view()),
    path('api/<int:pk>',ProfileUpdateApi.as_view()),
    path('api/professions',ProfessionsApi.as_view()),
    path('api/professions/create',ProfessionsCreateApi.as_view()),
    path('api/professions/<int:pk>',ProfessionsUpdateApi.as_view()),
    path('api/professions/<int:pk>/delete',ProfessionsDeleteApi.as_view()),
    path('api/department',DepartmentApi.as_view()),
    path('api/department/create',DepartmentCreateApi.as_view()),
    path('api/department/<int:pk>',DepartmentUpdateApi.as_view()),
    path('api/department/<int:pk>/delete',DepartmentDeleteApi.as_view()),
    path('api/grad_class',Grad_ClassApi.as_view()),
    path('api/grad_class/create',Grad_ClassCreateApi.as_view()),
    path('api/grad_class/<int:pk>',Grad_ClassUpdateApi.as_view()),
    path('api/grad_class/<int:pk>/delete',Grad_ClassDeleteApi.as_view()),
    path('api/bgp_class',BGP_ClassApi.as_view()),
    path('api/bgp_class/create',BGP_ClassCreateApi.as_view()),
    path('api/bgp_class/<int:pk>',BGP_ClassUpdateApi.as_view()),
    path('api/bgp_class/<int:pk>/delete',BGP_ClassDeleteApi.as_view()),
]