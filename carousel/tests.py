from django.test import TestCase
from .models import Carousel, Image


class CarouselModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Carousel.objects.create(title='Japan island')
        Carousel.objects.create(description='Kai province')

    def test_title_content(self):
        carousel = Carousel.objects.get(id=1)
        expected_object_name = carousel.title
        self.assertEquals(expected_object_name, 'Japan island')

    def test_description_content(self):
        carousel = Carousel.objects.get(id=2)
        expected_object_name = carousel.description
        self.assertEquals(expected_object_name, 'Kai province')


class ImageModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Image.objects.create(carousel=Carousel.objects.create(title='South ofJapan'),
                             title='Okinava',
                             description='Night city of Okinava, Japan',
                             location='some/path/on/the/AWS')
        Image.objects.create(carousel=Carousel.objects.create(title='Takeda clan'),
                             title='Takeda',
                             description='Kai, the stronghold of ones mighty clan Takeda, Japan',
                             location='some/path/on/the/AWS')

    def test_title_content(self):
        image = Image.objects.get(id=1)
        self.assertEquals(image.title, 'Okinava')
        self.assertEquals(image.description, 'Night city of Okinava, Japan')
        self.assertEquals(image.location, 'some/path/on/the/AWS')

    def test_description_content(self):
        image = Image.objects.get(id=2)
        self.assertEquals(image.title, 'Takeda')
        self.assertEquals(image.description, 'Kai, the stronghold of ones mighty clan Takeda, Japan')
        self.assertEquals(image.location, 'some/path/on/the/AWS')
