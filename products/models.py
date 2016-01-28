from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=120, default='New product')
    price = models.DecimalField(decimal_places=2, max_digits=120, default=0)
    description = models.TextField(null=True, blank=True)
    specification = models.TextField(null=True, blank=True)
    image = models.FileField(upload_to='products/')

    def __str__(self):
        return self.title


class Review(models.Model):
    product = models.ForeignKey(Product, related_name='product_reviews')
    author = models.EmailField(null=True, blank=True)
    stars = models.PositiveIntegerField(default=5)
    body = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.product.title