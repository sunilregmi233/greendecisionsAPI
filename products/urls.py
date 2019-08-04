from django.urls import path
from .views import ProductDetail, ProductList, CategoryList, CategoryDetail


urlpatterns = [
    path('<int:pk>/', ProductDetail.as_view()),
    path('product/', ProductList.as_view()),
    path('category/<int:pk>/', CategoryDetail.as_view()),
    path('category/', CategoryList.as_view()),
]