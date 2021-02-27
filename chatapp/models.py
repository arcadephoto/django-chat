from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# class ChatApp(models.Model):
#     text = models.CharField(max_length=255)
#     owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
#
#     def __str__(self):
#         return self.text[:50]

class Message(models.Model):
    text = models.CharField(max_length=255)
    owner = models.CharField(max_length=255, blank=True, null=True)
    room = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.text[:50]
# owner = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
