from rest_framework import generics
from .models import Carousel, Image
from .serializers import CarouselSerializer, ImageSerializer


class ListCarousel(generics.ListCreateAPIView):
    queryset = Carousel.objects.all()
    serializer_class = CarouselSerializer


class ImageView(generics.ListAPIView):

    def get_queryset(self):
        print(self.args)
        return Image.objects.all().filter(carousel=self.kwargs['pk'])

    serializer_class = ImageSerializer
