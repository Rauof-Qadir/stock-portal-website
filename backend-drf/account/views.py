from django.shortcuts import render
from rest_framework import generics
from .serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


class UserCreateView(generics.CreateAPIView):
    #or yahan par jo variable banai ha wo django rest framework ka built in variable ha, un ka names ap apni marzi sa change na karain
    queryset = User.objects.all() #yeh line zaroori ha kyu ka yeh batata ha k konsa model use karna ha
    serializer_class = UserSerializer # Yeh line batati hai ke kaunsa serializer use hoga
    permission_classes = [AllowAny]  # Allow any user (authenticated or not) to



# Create your views here.
