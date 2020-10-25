from django.shortcuts import render
from rest_framework import generics

from portfolio.models import News, Picture
from .serializers import NewsSerializer, PictureSerializer


class NewsAPIView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class PictureAPIView(generics.ListAPIView):
    queryset = Picture.objects.all()
    serializer_class = PictureSerializer
