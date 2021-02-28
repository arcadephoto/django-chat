from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.
# class ChatApp(models.Model):
#     text = models.CharField(max_length=255)
#     owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
#
#     def __str__(self):
#         return self.text[:50]

class Message(models.Model):
    text = models.CharField(max_length=255)
    room = models.CharField(max_length=255, default=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


    def __str__(self):
        return self.text[:50]

class Room(models.Model):
    text = models.CharField(max_length=255, default=True)
    roomname = models.CharField(max_length=255, default=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.text[:50]
