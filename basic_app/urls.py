app_name = 'basic_app'
from django.conf.urls import url
from basic_app import views
urlpatterns = [
    url('train/', views.train, name='train'),
    url('',views.index, name='index'),
    #url(r'^home',views.index, name='index'),
]