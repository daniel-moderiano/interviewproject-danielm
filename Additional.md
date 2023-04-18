## Docker

All 3 aspects of the project were dockerised at one point during exploration of docker. In each case, a separate Dockerfile was created to control how each image was built. Then, docker compose was used to bring all of these together and coordinate the containers. Each container has environment variables passed in by default, however this is all transparent and not suitable for production.

Docker compose lets us reference each Dockerfile to build each respective image and container. It allows us to define exposed ports and map these to host ports, and lets us name containers and organise container dependencies. Volumes can also be defined here. 

After running the docker-compose up command, each image is created, and the containers are started based on those images. Although these containers are 'grouped' under a single parent, they really are separate containers, each with their own environments. 

### Post-run configuration

The `depends_on` parameter only results in waiting for a container to be running and has no bearing on how long a process might take to start. In the case of this project, the Django `runserver` command will always beat the MariaDB process, resulting in the following error:

`cannot connect to db service` 

To solve this, confirm the database service is running by using the `docker exec` command to enter the db container terminal, then run:

`mysql -u root -p`

This should connect you to the db service and confirm it is running. While you are here, run 

`create database person;`

Such that the Django app doesn't throw a `db not found` error later on. 

At this point we should retry the Django app. First migrate with `python manage.py migrate` and then run the server with Gunicorn as follows:

`gunicorn --bind 0.0.0.0:8000 api.wsgi`

You should run this from the dame directory that `manage.py` lives in so that Gunicorn has access to Python path. This should create a running Django server on `localhost:8000` that we can then configure Apache to proxy port 80 requests too. 

## Apache config

Because we are using Gunicorn as the WSGI server, we no longer have to worry about the difficult Apache WSGI config. Instead, Apache now exists as a proxy device to direct all port 80 HTTP requests to `localhost` port 8000 where our Django/Gunicorn process is running. Apache will automatically look for `.conf` files in the `conf.d` directory where we can define virtual hosts. The following basic steps were used:

`sudo nano /etc/httpd/conf.d/default-site.conf`

Add the following config:

```
<VirtualHost *:80>
    ProxyPreserveHost On

    ProxyPass / http://localhost:8000/
    ProxyPassReverse / http://localhost:8000/
</VirtualHost>
```

Then restart the Apache service, and the reverse proxy should be active. 

> On CentOS and RHEL, there was an SELinux issue that was solved with `setsebool -P httpd_can_network_connect 1`

## Serving React with Django

Conceptually this process is simple - first build the frontend app using an `npm build` command or similar. Then, Django uses the static file output to serve a template `index.html` that references the React JS modules. In this case Vite was used. 

The process was extremely difficult in practice, I tried various plugins to no success. In the end this [article](https://medium.com/codex/deploying-react-through-djangos-static-files-part-1-dev-setup-8a3a7b93c809) introduced me to Whitenoise as a static file server within python/django, and implementing this with Vite in place of CRA was no problem at all. 

All that was then needed was a new Django app with a catch all route that served the React frontend, and then a simple modification to the React API calls such that they now targetted the IP of the host server for requests (still using the `api/` Django routes).

## Architecture

![interview-project](https://user-images.githubusercontent.com/59184832/232649992-7926b9ff-5e3e-4f4d-8784-24f31ca1e157.png)

