# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-27 11:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20160127_1151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='username',
            field=models.CharField(blank=True, max_length=40, null=True, unique=True),
        ),
    ]
