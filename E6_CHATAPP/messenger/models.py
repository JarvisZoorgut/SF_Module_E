from django.db import models

from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    name = models.CharField(max_length=100, blank=True)

    # Указываем другие related_name, чтобы избежать конфликтов с auth.User
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='messenger_user_set',  # Изменяем related_name
        blank=True,
        help_text='The groups this user belongs to.'
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='messenger_user_permissions',  # Изменяем related_name
        blank=True,
        help_text='Specific permissions for this user.'
    )

class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.sender} -> {self.receiver}: {self.content[:30]}'


class ChatGroup(models.Model):
    name = models.CharField(max_length=255)
    members = models.ManyToManyField(User, related_name='chat_groups')
    admin = models.ForeignKey(User, related_name='admin_groups', on_delete=models.CASCADE)


class GroupMessage(models.Model):
    group = models.ForeignKey(ChatGroup, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
