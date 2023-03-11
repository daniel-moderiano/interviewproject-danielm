from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from people.models import Person
from people.serializers import PersonSerializer

@api_view(['GET', 'POST'])
def person_list(request):
    """
    List all people, or create a new person.
    """
    if request.method == 'GET':
        snippets = Person.objects.all()
        serializer = PersonSerializer(snippets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)