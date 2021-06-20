from django.conf.urls import url
from django.urls import path, include
from .api import RegisterApi, LoginApi
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
      path('api/register', RegisterApi.as_view()),
      path('api/token/', LoginApi.as_view(), name='token_obtain_pair'),
      path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]