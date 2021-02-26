from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Message
from .serializers import MessageSerializer


class ChatAppListAPIView(generics.ListAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ChatCreateAPIView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

class ChatUpdateAPIView(generics.UpdateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ChatDoAll(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)
