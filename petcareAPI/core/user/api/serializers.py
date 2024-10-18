from rest_framework import serializers
from core.user.models import User
from django.conf import settings

class UserSerializer(serializers.ModelSerializer): # heredo del serializador base
    
    class Meta:
        model = User
        fields = [
            "id", # no pondra el id normal autoincremental que tiene por defecto el modelo, sino el del serializador que heredo, en este caso es public_id
            "username",
            "first_name",
            "last_name",
            "email",
            "is_active",
        ]

    read_only_field = ["is_active"]