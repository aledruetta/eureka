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
        verbose_name='Título',
        max_length=250,
    )
    creado = models.DateTimeField(
        verbose_name='Creado en',
        auto_now_add=True,
    )
    creadoPor = models.ForeignKey(
        User,
        verbose_name='Creado por',
        related_name='anuncios_creados',
        default='',  # current user?
        on_delete=models.PROTECT,
    )
    actualizado = models.DateTimeField(
        verbose_name='Actualizado en',
        auto_now=True,
    )
    actualizadoPor = models.ForeignKey(
        User,
        verbose_name='Actualizado por',
        related_name='anuncios_actualizados',
        on_delete=models.PROTECT,
    )
    activo = models.BooleanField(
        verbose_name='Activo?',
        default=True,
    )
    destacado = models.BooleanField(
        verbose_name='Destacado?',
        default=False,
    )
    tipoTrans = models.CharField(
        verbose_name='Tipo Transacción',
        max_length=1,
        choices=TIPO_TRANS_CHOICES,
    )
    tipoProp = models.ForeignKey(
        'TipoPropiedad',
        verbose_name='Tipo Propiedad',
        on_delete=models.PROTECT,
    )
    ciudad = models.ForeignKey(
        'Ciudad',
        verbose_name='Ciudad',
        on_delete=models.PROTECT,
    )
    tipoDom = models.ForeignKey(
        'TipoDomicilio',
        verbose_name='Tipo Domicilio',
        on_delete=models.PROTECT,
    )
    domicilio = models.CharField(
        verbose_name='Domicilio',
        max_length=50,
    )
    numero = models.PositiveSmallIntegerField(
        verbose_name='Número',
        default=0,
    )
    terreno = models.PositiveIntegerField(
        verbose_name='Terreno',
        default=0,
    )
    unidad = models.CharField(
        verbose_name='Unidad',
        max_length=1,
        choices=UNIDAD_TERRENO_CHOICES,
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
        verbose_name='Descripción',
        null=True,
    )

    class Meta:
        ordering = ('-creado',)
        verbose_name = 'Anuncio'

    def __str__(self):
        return '{} - {}'.format(self.id, self.titulo)


class Ciudad(models.Model):
    nombre = models.CharField(
        verbose_name='Nombre Ciudad',
        max_length=50,
    )

    class Meta:
        verbose_name_plural = 'Ciudades'

    def __str__(self):
        return self.nombre


class TipoDomicilio(models.Model):
    tipo = models.CharField(
        verbose_name='Tipo Domicilio',
        max_length=15,
    )

    def __str__(self):
        return self.tipo


class TipoPropiedad(models.Model):
    tipo = models.CharField(
        verbose_name='Tipo Propiedad',
        max_length=15,
    )

    class Meta:
        verbose_name_plural = 'Tipo Propiedades'

    def __str__(self):
        return self.tipo
