from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render

def render_react(request):
    return render(request, "index.html")

urlpatterns = [
    path('api/', include('people.urls')),
    path('', render_react),
]