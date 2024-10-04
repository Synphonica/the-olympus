# Que es forms.py?
# Forms.py es un módulo que se encarga de definir los formularios que se utilizarán en una aplicación de Django.
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUser  # Se define el modelo que se utilizará en el formulario
        fields = ["email"]  # Se definen los campos que se incluirán en el formulario


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ["email"]
