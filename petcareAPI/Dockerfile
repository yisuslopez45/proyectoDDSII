FROM python:3.11

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar requirements.txt y instalar dependencias
COPY requirements.txt .
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y postgresql-client
# Copiar el resto del código de la aplicación
COPY . .

# Asegúrate de que wait-for-it.sh esté en el contenedor
COPY wait-for-it.sh .

# Hacer wait-for-it.sh ejecutable
RUN chmod +x wait-for-it.sh

# Comando por defecto
CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:8000"]