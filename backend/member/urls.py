from django.urls import path
from .api import ProfileListApi, ProfileCreateApi, ProfileUpdateApi

urlpatterns = [
    path('api',ProfileListApi.as_view()),
    path('api/create',ProfileCreateApi.as_view()),
    path('api/<int:pk>',ProfileUpdateApi.as_view()),
]