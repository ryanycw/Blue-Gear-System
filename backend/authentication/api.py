from rest_framework import generics, permissions, mixins, status
from rest_framework.response import Response
from .serializer import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User


#Register API
class RegisterApi(generics.GenericAPIView):

    serializer_class = RegisterSerializer

    def post(self, request, *args,  **kwargs):
        print(request.data)
        serializer = self.get_serializer(data=request.data)
        
        #print(serializer.errors)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "message": "User Created Successfully.  Now perform Login to get your token",
            })
        except Exception as e:
            return Response({ "message": f"{e}, Please try again",}, 
            status=status.HTTP_406_NOT_ACCEPTABLE)