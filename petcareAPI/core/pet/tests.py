# core/pet/tests.py

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from .models import Pet

class MascotaCRUDTests(TestCase):
    # CONFIGURACION INICIAL DEL TEST DEL CRUDL
    def setUp(self):
        self.client = APIClient()
        self.mascota_data = {
            'nombre': 'Firulais',
            'especie': 'Perro',
            'raza': 'Golden Retriever',
            'edad': 1,
            'descripcion': 'Un perro amigable y juguetón'
        }
        self.mascota = Pet.objects.create(**self.mascota_data)
        self.mascota_url = reverse('pet-detail', args=[self.mascota.id])  # URL para el detalle de la mascota api/v1/pet/1
    # TEST DAVID LOPEZ
    def test_crear_mascota(self):
        """Prueba la creación de una nueva mascota"""
        response = self.client.post(reverse('pet-list'), self.mascota_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Pet.objects.count(), 2)  # Ahora deberían haber 2 mascotas en la base de datos

    def test_obtener_lista_mascotas(self):
        """Prueba la obtención de la lista de mascotas"""
        response = self.client.get(reverse('pet-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)  # Solo una mascota en la base de datos

    # TEST SANTIAGO JIMENEZ
  
