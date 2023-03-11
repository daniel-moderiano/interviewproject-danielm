from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=200)   # 200 max length has been arbitrarily chosen
    last_name = models.CharField(max_length=200)
    email = models.EmailField()
    age = models.PositiveIntegerField()
    income = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'