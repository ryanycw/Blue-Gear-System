from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt import views as jwt_views
from .serializer import RegisterSerializer, UserSerializer, CustomTokenObtainPairSerializer

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

class LoginApi(jwt_views.TokenObtainPairView):
    # Replace the serializer with your custom
    serializer_class = CustomTokenObtainPairSerializer