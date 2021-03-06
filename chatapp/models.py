from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Message(models.Model):
    text = models.CharField(max_length=255)
    channel = models.CharField(max_length=255, default=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.text[:50]

class Room(models.Model):
    roomname = models.ForeignKey(Message, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.text[:50]
