from django.shortcuts import render

def home(request):
  context = {"name": "Juan"}
  return render(request, "vetoffice/home.html", context)