# Que es models.py?
# Models.py es un módulo que se encarga de definir la estructura de la base de datos en Django.
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email
