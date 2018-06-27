from django.contrib import admin

# Register your models here.

from django.contrib import admin

from .models import Carousel, Image

admin.site.register(Carousel)
admin.site.register(Image)
