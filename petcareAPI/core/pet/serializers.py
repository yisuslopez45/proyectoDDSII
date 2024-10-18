from rest_framework import serializers
from core.pet.models import Pet

class PetSerializers (serializers.ModelSerializer):
    class Meta:
        model  = Pet
        fields = '__all__'