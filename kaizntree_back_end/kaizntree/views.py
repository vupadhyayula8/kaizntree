from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def login(request):
    if request.method == "POST":
        print(request.POST.get)
        print(request.POST)
        print("came here")
    return HttpResponse("Login")


def register(request):
    return HttpResponse("Register")


def fetch_items(request):
    return HttpResponse("Fetch items")


def add_item(request):
    return HttpResponse("Add item")


def add_category(request):
    return HttpResponse("Add category")

