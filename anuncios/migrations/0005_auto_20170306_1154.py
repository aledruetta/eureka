# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-06 14:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('anuncios', '0004_auto_20170306_1126'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='anuncio',
            name='actualizado',
        ),
        migrations.RemoveField(
            model_name='anuncio',
            name='actualizadoPor',
        ),
        migrations.RemoveField(
            model_name='anuncio',
            name='creadoPor',
        ),
        migrations.AlterField(
            model_name='anuncio',
            name='referencia',
            field=models.AutoField(primary_key=True, serialize=False, verbose_name='Ref.'),
        ),
    ]