import os

from django.db import models


class Carousel(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title


def get_image_path(instance, filename):
    return os.path.join('media', 'carousel', str(instance), filename)


class Image(models.Model):
    carousel = models.ForeignKey(Carousel, on_delete=models.CASCADE, related_name='images')
    title = models.CharField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    location = models.ImageField(upload_to=get_image_path, blank=False, null=False)

    def __str__(self):
        """A string representation of the model."""
        return self.title
