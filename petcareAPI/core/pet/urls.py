from django.urls import path, include
from rest_framework import routers
from .views import PetViewSet

# Crea un enrutador y registra el ViewSet
router = routers.DefaultRouter()

router.register(r'pet', PetViewSet)

urlpatterns = [
    path('', include(router.urls)),
]