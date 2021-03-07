from rest_framework import serializers

from .models import Message, Room




class MessageSerializer(serializers.ModelSerializer):
    roomname = serializers.CharField(source="roomname.roomname", default=True)
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:

        model = Message
        fields = '__all__'




class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
