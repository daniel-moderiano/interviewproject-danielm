After running the docker-compose up command, there will likely be a "cannot connect to db service" error. This occurs because the Django runserver command always seems to execute before the database starts running. 

To solve this, confirm the database service is running by exec'ing into the db container terminal and running

mysql -u root -p

This should connect you to the db service. If so, create the database 'person' while connected.

Now, we can re-run the runserver command after exec'ing into the django container terminal. Migrations should also be run here. 