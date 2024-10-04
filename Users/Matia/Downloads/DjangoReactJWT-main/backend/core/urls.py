# Description: Archivo de configuración de las URLs del proyecto

from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/accounts/", include("accounts.urls")
    ),  # Se incluyen las URLs de la aplicación accounts
    path(
        "api/productos/", include("productos.urls")
    ),  # Incluir las URLs de la aplicación productos
]
