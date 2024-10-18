from rest_framework.viewsets import GenericViewSet
from core.auth.api.serializers import LoginSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken
from rest_framework.response import Response
from rest_framework import status

class LoginViewSet(GenericViewSet): 
  serializer_class = LoginSerializer 
  permission_classes=(AllowAny,) 
  http_method_names = ['post'] 

  
  def create(self, request): 
    serializer=self.serializer_class(data=request.data) # creo el serializador segun los datos
    serializer.is_valid(raise_exception=True) # valido el serializador, con raise_exception=True, si no es valido, lanzara una excepción, la maneja el manejador de excepciones de django
    return Response(serializer.validated_data, status=status.HTTP_200_OK) # devuelvo los datos validados y el estado de la petición