from django.urls import path
from .views import render_react

urlpatterns = [
    path("", render_react),
]