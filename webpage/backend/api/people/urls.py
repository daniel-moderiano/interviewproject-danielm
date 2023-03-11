from django.urls import path
from people.views import PersonListCreate

urlpatterns = [
    path('api/people/', PersonListCreate.as_view()),
]