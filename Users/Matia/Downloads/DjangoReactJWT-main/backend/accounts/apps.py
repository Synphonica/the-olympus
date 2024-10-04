# Que es apps.py?
# Apps.py es un módulo que se encarga de definir la configuración de una aplicación de Django.
from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'
