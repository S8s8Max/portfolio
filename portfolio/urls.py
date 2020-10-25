from django.urls import path
from django.views.decorators.cache import cache_page
from . import views

app_name = "portfolio"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("news/", views.NewsView.as_view(), name="news"),
    path("profile/", views.ProfileView.as_view(), name="profile"),
    path("works/", cache_page(60 * 30)(views.WorksView.as_view()), name="works"),
]
