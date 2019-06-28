from django.urls import path

# from .views import PostList, PostDetail, UserDetail, UserList

from rest_framework.routers import SimpleRouter
from .views import UserViewSet, PostViewSet

# urlpatterns = [
#     path('users/', UserList.as_view()), # new
#     path('users/<int:pk>/', UserDetail.as_view()), # new
#     path('', PostList.as_view()),
#     path('<int:pk>/', PostDetail.as_view()),
   
# ]

router = SimpleRouter()
router.register('users', UserViewSet, base_name='users')
router.register('', PostViewSet, base_name='posts')


urlpatterns = router.urls