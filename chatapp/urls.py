from django.urls import path
from .views import ChatAppListAPIView, ChatAppDetailAPIView, ChatCreateAPIView, ChatUpdateAPIView, ChatDoAll



app_name = 'chatapp'
#should be the same as what you said in your conf urls



urlpatterns = [

path('chat/', ChatAppListAPIView.as_view(), name='chatapp_list'),
path('post/', ChatCreateAPIView.as_view(), name='chatapp_post'),
path('<int:pk>/', ChatDoAll.as_view(), name='chatapp_edit'),
]
