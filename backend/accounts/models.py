import os
from datetime import date
from django.db import models
from django.db.models.deletion import PROTECT
from django.utils import tree
from authentication.models import CustomUser
from phonenumber_field.modelfields import PhoneNumberField

class Professions(models.Model):
    word = models.CharField(max_length=20, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.word

class Department(models.Model):
    department = models.CharField(max_length=50, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.department

class Grad_Class(models.Model):
    grad_class = models.CharField(max_length=5, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.grad_class

class BGP_Class(models.Model):
    bgp_class = models.CharField(max_length=5, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.bgp_class

def content_file_name(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (instance.name, ext)
    return os.path.join(f'profile_images/{date.today().strftime("%y/%m/%d/")}', filename)

# Create your models here.
class Profile(models.Model):
    #profile_photo = models.ImageField(upload_to=content_file_name, blank=True, null=True)
    name = models.CharField(max_length = 10, null = True)
    email = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True)
    mobile = PhoneNumberField(blank = False, unique = True, null = True)
    location = models.CharField(max_length = 50, null = True)
    professions = models.ForeignKey(Professions, null=True, on_delete=PROTECT)
    interests = models.CharField(max_length = 50, null = True)
    bgp_class = models.ForeignKey(BGP_Class, null=True, on_delete=PROTECT)
    grad_class = models.ForeignKey(Grad_Class, null=True, on_delete=PROTECT)
    grad_dep = models.ForeignKey(Department, null=True, on_delete=PROTECT)
    web = models.URLField(max_length=200, null=True)
    intro = models.CharField(max_length=150, null=True)
    created_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    
    