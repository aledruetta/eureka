# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-06 14:26
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('anuncios', '0003_auto_20170306_1032'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='ciudad',
            options={'ordering': ('nombre',), 'verbose_name_plural': 'Ciudades'},
        ),
        migrations.AlterModelOptions(
            name='tipodomicilio',
            options={'ordering': ('tipo',)},
        ),
        migrations.AlterModelOptions(
            name='tipopropiedad',
            options={'ordering': ('tipo',), 'verbose_name_plural': 'Tipo Propiedades'},
        ),
    ]
