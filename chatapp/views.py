from django.shortcuts import render
from rest_framework import generics, permissions

from .models import ChatApp
from .serializers import ChatAppSerializer


class ChatAppListAPIView(generics.ListAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatCreateAPIView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatUpdateAPIView(generics.UpdateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

class ChatDoAll(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = ChatApp.objects.all()
    serializer_class = ChatAppSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
