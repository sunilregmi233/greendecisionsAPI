from rest_framework import serializers
from .models import Product, Category


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('category', 'name', 'slug', 'description',
                    'price', 'available', 'stock', 'created_at', 'updated_at',
                    'image', )
        model = Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('name', 'slug', 'created_at', 'updated_at') 
        model = Category

