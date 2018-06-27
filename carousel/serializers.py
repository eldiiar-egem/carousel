from rest_framework import serializers
from .models import Carousel, Image


class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = Carousel


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'carousel',
            'id',
            'title',
            'description',
            'location',
        )
        model = Image
