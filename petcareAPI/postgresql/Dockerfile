# Usa la imagen oficial de PostgreSQL como base
FROM postgres:14

# Instala extensiones adicionales si las necesitas
RUN apt-get update && apt-get install -y \
    postgresql-contrib \
    && rm -rf /var/lib/apt/lists/*

# Establece la zona horaria de Colombia
ENV TZ=America/Bogota

# Copia la configuración personalizada de PostgreSQL
COPY postgresql.conf /etc/postgresql/postgresql.conf

# Expone el puerto 5432
EXPOSE 5432

# El comando para iniciar PostgreSQL ya está incluido en la imagen base