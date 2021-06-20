from .models import CustomUser
from rest_framework import  serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

 # Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id','email','username','password', )
        extra_kwargs = {
            'password':{'write_only': True},
        }
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(validated_data['username'], validated_data['email'], password = validated_data['password'],)
        return user

# User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        # The default result (access/refresh tokens)
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs)
        # Custom data you want to include
        data.update({'user': self.user.username})
        data.update({'id': self.user.id})
        # and everything else you want to send in the response
        return data