# Que es serializers.py?
# Serializers.py es un módulo que se encarga de convertir los datos de un modelo en una estructura de datos que puede ser fácilmente convertida en JSON u otro formato de datos.

from .models import CustomUser
from rest_framework import serializers
from django.contrib.auth import authenticate


class CustomUserSerializer(
    serializers.ModelSerializer
):  # Se define un serializador para el modelo CustomUser
    class Meta:  # Se define la clase Meta
        model = CustomUser  # Se define el modelo que se utilizará en el serializador
        fields = [
            "id",
            "username",
            "email",
        ]  # Se definen los campos que se incluirán en el serializador


class UserRegistrationSerializer(serializers.ModelSerializer):
    password_1 = serializers.CharField(
        write_only=True, required=True, style={"input_type": "password"}
    )
    password_2 = serializers.CharField(
        write_only=True, required=True, style={"input_type": "password"}
    )

    class Meta:
        model = CustomUser
        fields = ["id", "email", "username", "password_1", "password_2"]
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):  # Se define un método para validar los datos
        if attrs["password_1"] != attrs["password_2"]:
            raise serializers.ValidationError(
                {"password": "Los campos de contraseña no coinciden"}
            )
        if len(attrs["password_1"]) < 8:
            raise serializers.ValidationError(
                {"password": "La contraseña debe tener al menos 8 caracteres"}
            )
        return attrs

    def create(self, validated_data):  # Se define un método para crear un nuevo usuario
        password = validated_data.pop(
            "password_1"
        )  # Se obtiene la contraseña del usuario y se elimina del diccionario de datos validados
        validated_data.pop(
            "password_2"
        )  # Se elimina la confirmación de la contraseña del diccionario de datos validados
        return CustomUser.objects.create_user(
            password=password, **validated_data
        )  # Se crea un nuevo usuario con los datos validados


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True, style={"input_type": "password"})

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            user = authenticate(
                request=self.context.get("request"), email=email, password=password
            )
            if not user:
                raise serializers.ValidationError("Credenciales no válidas")
        else:
            raise serializers.ValidationError("Debe incluir 'email' y 'password'")

        attrs["user"] = user
        return attrs


class UserLogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    default_error_messages = {
        "bad_token": ("El token de refresco es inválido o ha expirado.")
    }

    def validate(self, attrs):
        self.token = attrs["refresh"]

        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail("bad_token")
