from django.test import TestCase
from django.urls import reverse

from people.models import Person

class AuthorListViewTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create multiple people to test retrieval of list of people
        number_of_people = 4

        for person_id in range(number_of_people):
            Person.objects.create(
                first_name=f'John {person_id}',
                last_name=f'Doe {person_id}',
                email="john@gmail.com",
                age=24,
                income=50000
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/api/people/')
        self.assertEqual(response.status_code, 200)