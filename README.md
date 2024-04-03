# MacOS server setup

**1.Setting up the Virtual Environment**
// The virtual enviroment is set for depedencies and versions of the project to be isolated from the rest //
   - Make sure you're in `bezbez-app` directory
   - Make sure you have python installed `python3 --version` 
   - Create a virtual environment  ` $ python3 venv venv`
   - Activate the virtual environment: `$ source venv/bin/activate`
   - create a `.gitignore ` file under the `venv`  folder

   From now on any modification on the server should be done after activating the venv

**2. Download and set up Postgres**
   - go to `https://postgresapp.com/downloads.html`and download postgres 13
   - add the app into your `Applications` folder and initialize it
   - To use command line tools (like psql) from your Terminal, add Postgres.app’s bin folder to your $PATH:
   You can do this with the following command:
   `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`

   You can now interact with your postgres database using `psql` directly from terminal 

**3. Dowload Django and create your server**
   - dowload django using the following command: `python3 -m pip install django`
   - verify the installation using the following command: `python3 -m django --version`
   - make sure you're in `bezbez-app` directory
   - create the server using the following command: `django-admin startproject server`
   - go to your server `cd server` and run the server `python3 manage.py runserver`
   - create app `python3 manage.py startapp app-name`

   Now you have your server setup and ready

**4. Setting up the database using psql**
   - write the following command on your terminal: `psql`
   - Create a new database named `bezbez`. ` CREATE DATABASE bezbez; `
   - Create a MySQL user named `admin` with the password `CREATE USER admin WITH PASSWORD 'didi123' SUPERUSER; `
   - Grant all privileges to the `admin` user for the `bezbez` database. `GRANT ALL PRIVILEGES ON DATABASE bezbez TO admin; `
   
   Any Modifications you want to do on the details related to database credentials are in /server/settings.py 

**5. Back to the Django Project**
   - After configuring the database, return to your Django project directory.
   - Run Django's `$ python manage.py makemigrations` command to create migrations based on the changes you've made to your models.
   - Apply the migrations to the database using `$ python manage.py migrate`.
   - Finally, start the Django development server with `$ python manage.py runserver`.

