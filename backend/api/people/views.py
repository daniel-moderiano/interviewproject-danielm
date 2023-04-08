from rest_framework import generics
from people.models import Person
from people.serializers import PersonSerializer

class PersonListCreate(generics.ListCreateAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer