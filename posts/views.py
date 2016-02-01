from django.shortcuts import render

from rest_framework import permissions, viewsets
from rest_framework.response import Response

from .models import Post
from .permissions import IsAuthorOfPost
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

    def get_permission(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        return (permissions.Isauthenticated(), IsAuthorOfPost(),)


def perform_create(self, serializer):
    instance = serializer.save(author=self.request.user)

    return super(PostViewSet, self).perform_create(serializer)


class AccountPostViewSet(viewsets.ViewSet):
    queryset = Post.objects.select_related('author').all()
    serializer_class = PostSerializer

    def list(self, request, account_username=None):
        queryset = self.querset.filter(author__username=account_username)
        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)
