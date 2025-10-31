from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8, style={'input_type':'password'}) # ic ka matlab ha ka jab hum data read krain gy to password show na ho
    class Meta:
        model = User
        fields = [ 'username', 'email','password' ]

    def create(self, validated_data):
        user = User.objects.create_user( #ya passward ko hash kr k save krta ha
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        #user=User.objects.create(**validated_data)   is or uper wala code same han 
        return user