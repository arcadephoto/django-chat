# Generated by Django 3.1.7 on 2021-03-06 20:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0021_auto_20210306_2018'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='roomname',
            field=models.CharField(default=True, max_length=255, null=True),
        ),
    ]
