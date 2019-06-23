app_name = 'basic_app'
from django.conf.urls import url
from basic_app import views
urlpatterns = [
    url(r'^train/', views.train, name='train'),
    url(r'^console/', views.console, name='console'),
    url(r'^tester/', views.tester, name='tester'),
    url('',views.index, name='index'),
]
