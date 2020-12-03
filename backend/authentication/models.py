from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(blank = True, null = True, unique = True)
    grad_class = models.CharField(max_length = 10, blank = True, null = True)