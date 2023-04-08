from django.test import TestCase
from people.models import Person

class PersonListCreateTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Create multiple people to test retrieval of list of people
        number_of_people = 4

        for person_id in range(number_of_people):
            Person.objects.create(
                first_name=f'John {person_id}',
                last_name=f'Doe {person_id}',
                email=f'john{person_id}@gmail.com',
                age=24,
                income=50000
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/api/people/')
        self.assertEqual(response.status_code, 200)
    
    def test_lists_all_people(self):
        response = self.client.get('/api/people/')
        self.assertEqual(response.status_code, 200)
        # We are returning JSON responses with our API, hence we use a json method here
        self.assertEqual(len(response.json()), 4)

    def test_adds_a_person(self):
        response = self.client.post(
            "/api/people/", 
            {
              "first_name": "Jane",
              "last_name": "Doe",
              "email": "jane@gmail.com",
              "age": 24,
              "income": 50000
            }, 
            # Do not use content-type="application/json" here, it will convert to single quote strings!
            format="json"
        )
        self.assertEqual(response.status_code, 201)

    def test_handles_camel_case(self):
        response = self.client.post(
            '/api/people/', 
            {
            "firstName": "Jim",
            "lastName": "Doe",
            "email": "jim@gmail.com",
            "age": 24,
            "income": 50000
            }, 
            format="json"
        )
        self.assertEqual(response.status_code, 201)