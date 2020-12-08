from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Profile(models.Model):
    bgp_class = models.CharField(max_length = 5)
    cur_country = models.CharField(max_length = 50)
    cur_city = models.CharField(max_length = 50)
    email = models.EmailField(unique = True, null = True)
    mobile = PhoneNumberField(blank = False, unique = True, null = True)
    grad_class = models.CharField(max_length = 5)
    grad_dep = models.CharField(max_length = 50)
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now = True)