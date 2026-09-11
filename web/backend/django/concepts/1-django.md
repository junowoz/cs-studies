# 1. DJANGO BASICS

baterias são coisas como:

- URL routing
- Input form management and validation
- Templating engines for HTML and CSS
- Database configuration
- Web security
- Session repository and retrieval

Django tem um ORM (Object-Relational Mapper) que ajuda a trabalhar melhor com bases de dados.

Django is an MTV Framework, so it works with Models, Templates and Views.

- The model portion deals with data and databases, it can retrieve, store, and change data in a database.
- The template determines how the data looks on a web page.
- The view describes the data to be presented, and passes this information to the template.

Model is Back-End
Template is the Front
View is like the point where the Back and Front merge.

## Starting a Django Project

Here we have `django-admin`.
To start a project use `startproject`

So: `django-admin startproject nameOfProject`
It creates manage.py - which contains tools and helps us to, for example, start the server.

The other folder with the name of the project, is treated as the Python Package, since has the `__init__.py` which contains configurations and the package itself has configurations for the project.

## Configuring Django Settings

Important for us are settings.py and urls.py. We can safely ignore the other files, just remember to not delete them by accident!

`settings.py` is a Python file that contains configurations that we’ll be editing throughout the development of our project.

- INSTALLED_APPS which contains the apps that make up the Django project. After running the startproject command, our settings.py should contain:

INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
]

This is like the package.json

- DATABASES: Further down in settings.py, is a dictionary named DATABASES. It looks like:

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': BASE_DIR / 'db.sqlite3',
  }
}

We see that Django by default will set up an SQLite database for us. In later lessons, we’ll learn how to use it to store content.

- URLS: Inside are the URL declarations for this Django project, or a “table of contents” for the Django project.

urlpatterns = [
  path('admin/', admin.site.urls),
]

- Run the project:

`python3 manage.py runserver`

## Migrating the Database

> migrate only needs to be run when applying migrations to update database tables. Apps that do not use a database do not need to make migrations.

A migration is a pending database change. As we saw in settings.py, by default, Django will have some apps installed. Some of these default apps, for example, the admin interface, use the database and the migrations must be applied to the SQLite database.

To migrate the database:

`python3 manage.py migrate`

The admin is in /admin

## Django Apps

models.py is a migration directory.
a Django app is a submodule to a project, that contains the code for a specific feature.
A Django project refers to the entire code base and its parts. The Django project folder holds manage.py and the other module that includes settings.py.

an app starts with `python3 manage.py startapp myapp`

In order for Django to be aware of the app’s existence, it needs to be added to the list of INSTALLED_APPS in the project’s settings.py file.

INSTALLED_APPS = [
  "myapp.apps.MyappConfig"
]

## Creating a View for an App

In our veterinarian’s office example website, a customer might go to the /profile page of the website and their request gets passed to a view function to be processed. The view function may:

- Check to see if the customer is logged in
- Request their profile information from a database
- Format the information in a template
- Send back the profile page as an HTML file for the customer to view in their browser

## Using a View To Send an HTML Page

To render the front, put all in directories called templates.

inside the app we created, in this case `vetoffice`, we create a folder called `templates`, then inside templates we create another folder with the name of the app, in this case `vetoffice`, and inside that goes the `.html`

Django uses Django Templating Language to render python code inside HTML.

{{name}}

## Render the HTML in View

To render the HTML in view we would have to call the html file inside view and pass it the context

```python
from django.shortcuts import render

def home(request):
  context = {"name": "Juan"}
  return render(request, "vetoffice/home.html", context)
```

## Wiring Up a View

here we set the url in the django framework to match the view. This is where routes are set up.

the path:

```python
from django.urls import path
from . import views

urlpatterns = [
  path('', views.home)
]
```

the main urls.py

```python
from django.contrib import admin
from django.urls import path
from django.urls import include

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('vetoffice.urls'))
]
```

---

Create the view function for the following URLconf:

```python
urlpatterns = [
  path("/profile", views.profile, name="profile");
]

def profile (request):
  context = {"username": "user001", "DOB": "11/11/2011"}
  return render (request, "myapp/profile.html", context)
```

---

## Review

- How to use django-admin to start a project
- startproject command automatically configures default applications and a browser
- How to use the startapp command to create a Django app
- How to install the app to the list of INSTALLED_APPS
- How to write a view function to return a template with context
- How to wire a view function to a URL for us to see
