from django.contrib import admin
from .models import User, Message, ChatGroup, GroupMessage

admin.site.register(User)
admin.site.register(Message)
admin.site.register(ChatGroup)
admin.site.register(GroupMessage)