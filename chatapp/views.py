from django.shortcuts import render
from rest_framework import generics

from .models import ChatApp
from .serializers import ChatAppSerializer


class ChatAppListAPIView(generics.ListAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatCreateAPIView(generics.ListCreateAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatUpdateAPIView(generics.UpdateAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatDoAll(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer
