from rest_framework import serializers

from .models import ChatApp




class ChatAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatApp
        fields = ('id', 'text')
