## Test Project

This repository contains several directories related to different tasks of a test project. The directories and repo structure are descibed below.

### Task One

This task involves setting up an Apache web server on CentOS to serve a simple "Hello, World!" Django application.

There are two related directories to this task

- `centos-server` contains bash commands that were executed to setup the CentOS server from start to finish. Please note the `.sh` extension used for `setup.sh` was chosen to help readability and formatting - this file is not intended to be executed directly.
- `hello-world-app` contains the files for the django project served by the CentOS-Apache web server.

### Task Two

This task involves creating a webpage that uses a Django REST API backend, and a React frontend.

The directory structure is planned as follows:

```
.
└── webpage/
    ├── backend/
    │   └── api/
    └── frontend/

```

- `backend` will contain all the Django REST Framework related code for constructing the backend API.
- `frontend` will contain all of the React code related to the client UI.

### Task Three

This task involves developing unit tests for the frontend and backend that make up the webpage in Task 2 above.

These unit tests will be included within the relevant directories described in Task 2 above.


### Additional tasks

After completing the initial tasks above, there are some ways to extend the project to further explore the tech stack involved. The goals of these exploration tasks are:
- Downgrade the project to use the following versions:
    - MariaDB 5.5
    - Django 2.0
    - Docker v20+
    - Python 3.8
    - CentOS 7
    - Apache 2.4
    - TypeScript 4.9
    - React 17
    - Redux Toolkit 1.8
    - Material UI 5.5
- Become familiar with Docker - know the essential operations. Aim to host parts of the project in containers:
    - Host MariaDB 5.5 in a container, and have the project interact with this
    - Host the Django backend API in a separate container, and have it communicate with the containerised DB
    - Host the React frontend in a separate container, and have it communicate with the backend API
    - Use Docker compose to coordinate the various containers
- Add routes to the Django backend project to serve the frontend application/pages
- Host the entire project (Django serving React frontend + MariaDB container) on CentOS 7, and serve with Apache

### Questions

- How does the simple single-server/container achitecture differ to the production architecture? Are we running multiple local servers with many containers on each?
- Is Apache hosting the Django project in production, or acting as a reverse proxy?
- Does Django serve the frontend in production using a static file server? Why was this chosen as opposed to a separate frontend application?
