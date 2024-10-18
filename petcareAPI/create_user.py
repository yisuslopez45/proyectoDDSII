from django.contrib.auth import get_user_model
import os

User = get_user_model()  # Obtén el modelo de usuario correcto

# Obtener variables de entorno para el superusuario
username = "prueba"
email = "prueba@gmail.com"
password = "pass"

# Crear superusuario solo si no existe

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email=email, password=password)
    print(f"Superusuario '{username}' creado con éxito")
else:
    print(f"El superusuario '{username}' ya existe.")
