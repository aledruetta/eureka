from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Anuncio(models.Model):
    TIPO_TRANS_CHOICES = (
        ('V', 'Venta'),
        ('A', 'Alquiler'),
    )
    UNIDAD_TERRENO_CHOICES = (
        ('M', 'm²'),
        ('H', 'Ha'),
    )
    titulo = models.CharField(
        max_length=250,
        verbose_name='Título',
    )
    creado = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Creado en',
    )
    creadoPor = models.ForeignKey(
        User,
        related_name='anuncios_creados',
        verbose_name='Creado por',
        default='',  # current user?
        on_delete=models.PROTECT,
    )
    actualizado = models.DateTimeField(
        auto_now=True,
        verbose_name='Actualizado en',
    )
    actualizadoPor = models.ForeignKey(
        User,
        related_name='anuncios_actualizados',
        verbose_name='Actualizado por',
        on_delete=models.PROTECT,
    )
    publicado = models.DateTimeField(
        default=timezone.now,
        verbose_name='Publicado en',
    )
    activo = models.BooleanField(
        default=True,
        verbose_name='Activo?',
    )
    destacado = models.BooleanField(
        default=False,
        verbose_name='Destacado?',
    )
    tipoTrans = models.CharField(
        max_length=1,
        choices=TIPO_TRANS_CHOICES,
        verbose_name='Tipo de Transacción',
    )
    tipoProp = models.ForeignKey(
        'TipoPropiedad',
        verbose_name='Tipo de Propiedad',
        on_delete=models.PROTECT,
    )
    ciudad = models.ForeignKey(
        'Ciudad',
        verbose_name='Ciudad',
        on_delete=models.PROTECT,
    )
    tipoDom = models.ForeignKey(
        'TipoDomicilio',
        verbose_name='Tipo de Domicilio',
        on_delete=models.PROTECT,
    )
    domicilio = models.CharField(
        max_length=50,
        verbose_name='Domicilio',
    )
    numero = models.PositiveSmallIntegerField(
        default=0,
        verbose_name='Número',
    )
    terreno = models.PositiveIntegerField(
        default=0,
        verbose_name='Terreno',
    )
    unidad = models.CharField(
        max_length=1,
        choices=UNIDAD_TERRENO_CHOICES,
        verbose_name='Unidad',
    )
    habitaciones = models.PositiveSmallIntegerField(
        verbose_name='Habitaciones',
    )
    cochera = models.PositiveSmallIntegerField(
        verbose_name='Cochera',
    )
    pileta = models.BooleanField(
        verbose_name='Pileta',
    )
    precio = models.PositiveIntegerField(
        verbose_name='Precio',
    )
    descripcion = models.TextField(
        null=True,
        verbose_name='Descripción',
    )

    class Meta:
        ordering = ('-publicado',)
        verbose_name = 'Anuncio'

    def __str__(self):
        return '{} - {}'.format(self.id, self.titulo)


class Ciudad(models.Model):
    nombre = models.CharField(
        max_length=50,
        primary_key=True,
    )

    class Meta:
        verbose_name_plural = 'Ciudades'

    def __str__(self):
        return self.nombre


class TipoDomicilio(models.Model):
    tipo = models.CharField(
        max_length=15,
        primary_key=True,
    )

    def __str__(self):
        return self.tipo


class TipoPropiedad(models.Model):
    tipo = models.CharField(
        max_length=15,
        primary_key=True,
    )

    class Meta:
        verbose_name_plural = 'Tipo Propiedades'

    def __str__(self):
        return self.tipo
