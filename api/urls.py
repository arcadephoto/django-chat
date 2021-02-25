from django.urls import path, include

app_name = 'api_v1'

urlpatterns = [
    path('chatapp/', include('chatapp.urls', namespace='chatapp')),
]
