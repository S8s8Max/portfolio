from django.db import models

# Create your models here.
class Picture(models.Model):

    class Meta(object):
        db_table = "picture"

    picture = models.ImageField(upload_to='images')
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

