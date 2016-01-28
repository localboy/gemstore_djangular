from rest_framework import serializers

from .models import Product, Review


class ReviewSerializer(serializers.ModelSerializer):
    #product = ProductSerializer()
    class Meta:
        model = Review
        fields = ('id', 'stars', 'author', 'body')


class ProductSerializer(serializers.ModelSerializer):
    review = ReviewSerializer(many=True, source='product_reviews')

    class Meta:
        model = Product
        fields = ('id','title', 'price', 'description', 'specification', 'image', 'review')
