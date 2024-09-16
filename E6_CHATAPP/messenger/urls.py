from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import UserViewSet, ChatGroupViewSet, MessageViewSet

# Создаем роутер для автоматической генерации маршрутов
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'chats', ChatGroupViewSet)
router.register(r'messages', MessageViewSet)

urlpatterns = [
    path('', views.index, name='index'),  # Главная страница клиентской части
    path('api/', include(router.urls)),  # Включаем маршруты для API через роутер
]
