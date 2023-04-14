from django.urls import path, include

urlpatterns = [
    path('api/', include('people.urls')),
    path('', include('react.urls')),
]