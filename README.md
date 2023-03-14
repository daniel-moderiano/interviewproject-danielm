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
