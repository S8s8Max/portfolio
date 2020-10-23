from django.urls import path

from . import views

app_name = "portfolio"
urlpatterns = [
    path("", views.IndexView.as_view(), name="index"),
    path("news/", views.NewsView.as_view(), name="news"),
    path("profile/", views.ProfileView.as_view(), name="profile"),
    path("works/", views.WorksView.as_view(), name="works"),
    path("api/picture", views.PictureListCreate.as_view() ),
]
