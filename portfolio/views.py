# from django.contrib.auth import login as auth_login
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.views.generic import TemplateView, ListView
from config.secret import AccessKey, SecretKey, user_name
from config.settings import UNSPLASH_API
from .models import Picture, News
from rest_framework import generics
import requests
import json

# Create your views here.
class IndexView(TemplateView):
    template_name = "portfolio/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["greeting"] = "Hello!"
        return context


class ProfileView(TemplateView):
    template_name = "portfolio/profile.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["greeting"] = "Hello!"
        return context

class NewsView(ListView):
    model = News
    template_name = "portfolio/news.html"
    def get(self, request):
        news = News.objects.all()
        context = {
            "news": news,
        }
        return render(request, "portfolio/news.html", context)


class WorksView(View):
    def get(self, request, *args, **kwargs):
        # 写真
        pics = Picture.objects.all()

        context = {
            "pics": pics,
        }

        # Get responses from Unsplash API
        # if UNSPLASH_API is True.
        if UNSPLASH_API:
            data = self.get_pic_from_unsplash()
            context["data"] = data

        return render(request, "portfolio/works.html", context)


    def get_pic_from_unsplash(self):
        """
        Get photos that I liked in Unsplash(https://unsplash.com/).
        """

        # Create a query.
        # Can't treat other params unless my application is reviewed and
        # determined following Unsplash's guidlines.
        url = "https://api.unsplash.com/"
        url += "users/" + user_name + "/likes"
        url += "/?client_id=" + AccessKey

        response = requests.get(url)
        data = response.json()

        for target in data:
            download_location = target["links"]["download_location"] + "/?client_id=" + AccessKey
            target["links"]["download_location"] = ((requests.get(download_location)).json())["url"]

        return data
