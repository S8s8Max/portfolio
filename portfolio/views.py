# from django.contrib.auth import login as auth_login
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from django.views.generic import TemplateView

# Create your views here.
class IndexView(TemplateView):
    template_name = "portfolio/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["greeting"] = "Hello!"
        return context


index = IndexView.as_view()
