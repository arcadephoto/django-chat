from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Room(models.Model):
    roomname = models.CharField(max_length=255, default= True, null=True)
    def __str__(self):
        return self.roomname[:50]

class Message(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True,)
    roomname = models.ForeignKey(Room, on_delete=models.CASCADE, null=True,)

    def __str__(self):
        return self.text[:50]
