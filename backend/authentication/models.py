from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.db import models


class CustomUser(AbstractUser):
    # add additional fields in here
    
    email = models.EmailField(_('email'), unique=True, db_index=True)
    username = models.CharField(_('username'),max_length=20, unique=False,)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username',]
