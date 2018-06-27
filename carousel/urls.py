from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListCarousel.as_view()),
    path('<int:pk>/', views.ImageView.as_view()),
]
