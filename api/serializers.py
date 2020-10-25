from rest_framework import serializers
from portfolio.models import News, Picture

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ("label", "title", "content", "date", "thumb_nail")

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ("title", "picture")
