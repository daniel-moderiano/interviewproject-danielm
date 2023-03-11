from django.urls import path
from people.views import person_list

urlpatterns = [
    path('api/people/', person_list),
]