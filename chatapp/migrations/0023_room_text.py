# Generated by Django 3.1.7 on 2021-03-06 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0022_auto_20210306_2021'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='text',
            field=models.CharField(max_length=255, null=True),
        ),
    ]