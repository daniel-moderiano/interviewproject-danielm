from django.test import TestCase
from people.models import Person

# Create your tests here.
class PersonModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Person.objects.create(
            first_name="John",
            last_name="Doe",
            email="john@gmail.com",
            age=24,
            income=50000
        )

    def test_first_name_max_length(self):
        person = Person.objects.get(id=1)
        max_length = person._meta.get_field('first_name').max_length
        self.assertEqual(max_length, 200)

    def test_last_name_max_length(self):
        person = Person.objects.get(id=1)
        max_length = person._meta.get_field('last_name').max_length
        self.assertEqual(max_length, 200)

    def test_object_name_is_first_name_space_last_name(self):
        person = Person.objects.get(id=1)
        expected_object_name = f'{person.first_name} {person.last_name}'
        self.assertEqual(str(person), expected_object_name)