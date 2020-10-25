from django.urls import path
from .views import NewsAPIView
from .views import PictureAPIView

urlpatterns = [
    path("news/", NewsAPIView.as_view()),
    path("picture/", PictureAPIView.as_view()),
]

