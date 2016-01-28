from rest_framework import generics
from serializers import ProductSerializer, ReviewSerializer
from models import Product, Review


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ReviewList(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class ReviewDetail(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer