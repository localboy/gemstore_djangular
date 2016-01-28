from  django.conf.urls import url, include, patterns

from rest_framework.urlpatterns import format_suffix_patterns

from products import views


urlpatterns = patterns('',
                       url(r'^api/$', views.ProductList.as_view()),
                       url(r'^api/(?P<pk>[0-9]+)/$', views.ProductDetail.as_view()),
                       # url(r'^(?P<question_id>[0-9]+)/$', views.detail, name='detail'),
                       )
urlpatterns = format_suffix_patterns(urlpatterns)