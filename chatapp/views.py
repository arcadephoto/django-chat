from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Message, Room
from .serializers import MessageSerializer, RoomSerializer


class ChatAppListAPIView(generics.ListAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    # def get_queryset(self):
    #     return Message.objects.filter(user=self.request.user)

class ChatAppDetailAPIView(generics.RetrieveAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

class ChatCreateAPIView(generics.ListCreateAPIView):
    # permission_classes = (permissions.IsAdminUser | IsOwnerOrReadOnly,)
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

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

class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    def get_queryset(self):
        return Room.objects.filter(room=self.request.room)
