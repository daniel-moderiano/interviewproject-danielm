from django.urls import path
from people.views import PersonListCreate

urlpatterns = [
    path('people/', PersonListCreate.as_view()),
]