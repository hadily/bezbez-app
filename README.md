Setting the server up


 First you need to set your virtual enviroment so the dependecies of this project and versions are isolated.
$ cd server
$ pip install virtualenv
$ virtualenv venv
$ source venv/Scripts/activate   // to activate you virtual enviroments  
(every modification done after on the server should be after activating the venv )

Set the MYSQL server

// Acces the phpmyadmin

2. create database bezbez    
3. CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';
4. GRANT ALL PRIVILEGES ON `bezbez` . * TO 'admin'@'localhost';
FLUSH PRIVILEGES; 

// now back to our project 
$ python manage.py makemigrations
$ python manage.py migrate
$ python manage.py runserver





