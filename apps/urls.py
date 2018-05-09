from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^Candi/$', views.FormHandler.as_view(), name='form')
]
