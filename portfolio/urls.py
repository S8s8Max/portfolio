from django.urls import path

from . import views
from .views import IndexView

app_name = "portfolio"
urlpatterns = [
    path("", views.index, name="index"),
    #path("news/", views.news, name="news"),
    #path("profile/", views.profile, name="profile"),
    #path("works", views.works, name="works"),
]

#IndexView.as_view(template_name="portfolio/index.html")
