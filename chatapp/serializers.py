from rest_framework import serializers

from .models import Message, Room




# class ChatAppSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ChatApp
#         fields = ('id', 'text')


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
        depth = 1

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
        depth = 1
