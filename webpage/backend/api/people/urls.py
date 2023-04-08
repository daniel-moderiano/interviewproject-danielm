from django.urls import re_path
from people.views import PersonListCreate

urlpatterns = [
    re_path('api/people/', PersonListCreate.as_view()),
]