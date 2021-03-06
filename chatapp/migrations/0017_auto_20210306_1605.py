# Generated by Django 3.1.7 on 2021-03-06 16:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chatapp', '0016_remove_room_roomname'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='room',
            new_name='channel',
        ),
        migrations.AddField(
            model_name='room',
            name='roomname',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='chatapp.message'),
        ),
    ]