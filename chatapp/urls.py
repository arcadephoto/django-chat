from django.urls import path
from .views import ChatCreateAPIView, ChatDoAll, ChatAppListAPIView, RoomListCreateAPIView



app_name = 'chatapp'
#should be the same as what you said in your conf urls



urlpatterns = [

path('chat/', ChatAppListAPIView.as_view(), name='chatapp_list'),
path('post/', ChatCreateAPIView.as_view(), name='chatapp_post'),
path('<int:pk>/', ChatDoAll.as_view(), name='chatapp_edit'),
path('room/', RoomListCreateAPIView.as_view(), name='room_list'),
]
