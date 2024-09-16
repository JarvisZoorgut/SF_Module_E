from rest_framework import viewsets, permissions
from .models import User, ChatGroup, Message
from .serializers import UserSerializer, ChatGroupSerializer, MessageSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, render

# ViewSet для работы с пользователями
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

# ViewSet для работы с групповыми чатами
class ChatGroupViewSet(viewsets.ModelViewSet):
    queryset = ChatGroup.objects.all()
    serializer_class = ChatGroupSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Дополнительное действие для получения сообщений конкретного чата
    @action(detail=True, methods=['get'])
    def messages(self, request, pk=None):
        chat = get_object_or_404(ChatGroup, pk=pk)
        messages = Message.objects.filter(chat=chat)
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)

# ViewSet для работы с сообщениями
class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # При создании сообщения автоматически добавляем пользователя как отправителя
        serializer.save(sender=self.request.user)

def index(request):
    return render(request, 'messenger/index.html')