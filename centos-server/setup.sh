### IMPORTANT INFORMATION ###
# This series of commands and configuration is based on the following:
# 1. CentOS Stream 8 (x86_64) AMI (Sold by AWS on AMI Marketplace) hosted on EC2 instance
# 2. Use of the default "centos" user on the compute instance
# 3. A Django project called "hello-world-app" within a "interviewproject-danielm" repo
# 4. Use of Python 3.10.8


### INITIAL SETUP ###

# Update packages

sudo yum update

# Optionally add new user, change hostname, adjust SSH and other settings

# In this case we aren't using the root user, but have a pre-created "centos" user. The security group acts as a firewall, and the instance has already been setup with SSH for the centos user. Additional config is overkill for this test project. 

# Install the nano editor to make life easier down the line

sudo yum install nano


### INSTALLING PYTHON 3.10.8 ###

# Python 3.10.8 is needed to match my local development environment. CentOS Stream 8 ships with the ability to instally Python 3.6 max (with yum) and a version mismatch will break the entire project

# Start with dependencies to build a python packages.

sudo dnf groupinstall 'development tools'
sudo dnf install wget openssl-devel bzip2-devel libffi-devel
sudo yum install sqlite-devel

# Download the relevant Python version (in this case 3.10.8)

sudo curl https://www.python.org/ftp/python/3.10.8/Python-3.10.8.tgz -O

# Extract the Python package

tar -xvf Python-3.10.8.tgz

# Change into the Python directory

cd Python-3.10.8

# Configure Python and run the build process. Do not forget the config args - without these it can cause a massive headache later

sudo ./configure --enable-optimizations --enable-shared --enable-loadable-sqlite-extensions
sudo make install

# Check Python version

python3 -V

# If you see Python 3.10.8, everything is all good. If not, try the following commands. 

# Ensure Python and pip scripts exist on PATH

export PATH="/usr/local/bin:$PATH"
source ~/.bash_profile

# Confirm the Python/pip install location is present on PATH

echo $PATH

# If getting errors regarding missing lib directories, add /usr/local/lib/ to the library search path

export LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib

# Or run ldconfig to add the path to the linker cache:
 
sudo ldconfig /usr/local/lib 

# Confirm the fixes have taken effect

python3 -V

# Return to your home directory

cd ~


### VIRTUAL ENV AND DJANGO PROJECT SETUP ###

# First install git, if not already installed

sudo yum install git

# Clone the respository and cd into the repo

git clone https://gitlab.com/daniel.moderiano/interviewproject-danielm.git

# If necessary, copy the "hello-world-app" directory into /home. The rest of the repository is not required

cp interviewproject-danielm/hello-world-app -r .

# Create a new virtual environment within the hello-world project, and activate it

cd hello-world-app

python3 -m venv .venv

source .venv/bin/activate

# Install all required packages using the requirements file

pip install -r requirements.txt

# Add host server to list of allowed hosts within Django settings file

sudo nano django_project/settings.py

# Replace ALLOWED_HOSTS = [] --> ALLOWED_HOSTS = ['HOST_IP_HERE']

# Static file/folder configuration would usually be done here, but is not relevant for this simple hello world project

# You should be able to now visit a test server on your host via port 8000

python3 manage.py runserver 0.0.0.0:8000


### APACHE SERVER ###

# Begin by installing Apache and pre-requisites. The httpd-devel is required to let us pip install mod-wsgi

sudo yum install httpd httpd-devel 

# Start Apache and confirm it is running

sudo systemctl start httpd
sudo systemctl status httpd

# Install mod_wsgi directly into Python to enable a mod_wsgi-express server setup

pip install mod_wsgi

# Start up a server with the following path to your django wsgi.py file

mod_wsgi-express start-server django_project/wsgi.py

# You should now be able to access the Hello World webpage via the instance IP on port 8000 (this can be done via public IP because of the way I've set the instance up, or you could deploy an instance in a private subnet to allow local network access only)

# To run on a privileged port like 80, you must run as root, however you must configure to drop permissions to a different user after starting the server, e.g. for a centos user

sudo /home/centos/hello-world-app/.venv/bin/mod_wsgi-express start-server django_project/wsgi.py --port=80 --user centos --group centos

# If there is an error saying that port 80 is already in use, stop the running "non-python" Apache server, and re-reun the mod_wsgi command

sudo systemctl stop httpd

sudo /home/centos/hello-world-app/.venv/bin/mod_wsgi-express start-server django_project/wsgi.py --port=80 --user centos --group centos