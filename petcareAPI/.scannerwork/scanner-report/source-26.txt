from rest_framework import viewsets
from .serializers import PetSerializers
from .models import Pet

# Create your views here.


class PetViewSet(viewsets.ModelViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializers