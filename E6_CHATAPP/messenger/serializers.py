from rest_framework import serializers
from .models import User, Message, ChatGroup

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'avatar']


class MessageSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    receiver = UserSerializer(read_only=True)

    class Meta:
        model = Message
        fields = ['id', 'sender', 'receiver', 'content', 'timestamp']


class ChatGroupSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)

    class Meta:
        model = ChatGroup
        fields = ['id', 'name', 'members', 'admin']
