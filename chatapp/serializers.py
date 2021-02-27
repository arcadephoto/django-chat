from rest_framework import serializers

from .models import Message




# class ChatAppSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ChatApp
#         fields = ('id', 'text')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'text', 'owner', 'room')
