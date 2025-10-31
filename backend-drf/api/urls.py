from django.urls import path, include
from account import views as Userviews

urlpatterns = [
    path('register/', Userviews.UserCreateView.as_view()),
]