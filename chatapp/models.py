from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ChatApp(models.Model):
    text = models.CharField(max_length=255)
    # owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str(self):
        return self.text[:50]
