from django.shortcuts import render
from .models import Anuncio, Ciudad, TipoPropiedad
import locale


def home(request):
    anuncios = Anuncio.objects.all()
    anuncios_dest = anuncios.filter(
        destacado=True,
        activo=True,
    ).order_by('-creado')[:4]

    ciudades = Ciudad.objects.all()
    propiedades = TipoPropiedad.objects.all()

    anuncios_procesados = list()

    for anuncio in anuncios_dest:
        altura = anuncio.numero - (anuncio.numero % 100)

        prep = ''
        if altura > 0:
            prep = 'al '
        else:
            altura = ''

        domicilio = '{tipo} {nombre} {prep}{altura}'.format(
            tipo=anuncio.tipoDom,
            nombre=anuncio.domicilio.title(),
            prep=prep,
            altura=altura,
        )

        if anuncio.unidad == 'M':
            unidad = 'm²'
        elif anuncio.unidad == 'H':
            unidad = 'Ha'

        if anuncio.tipoTrans == 'V':
            tipoTrans = 'Venta'
        elif anuncio.tipoTrans == 'A':
            tipoTrans = 'Alquiler'

        if anuncio.pileta:
            pileta = 'Sí'
        else:
            pileta = 'No'

        if anuncio.cochera == 1:
            cochera = '1 vehículo'
        elif anuncio.cochera > 1:
            cochera = str(anuncio.cochera) + ' vehículos'
        else:
            cochera = 'No'

        locale.setlocale(locale.LC_ALL, 'pt_BR.utf-8')
        precio = locale.currency(anuncio.precio, grouping=True)

        anuncios_procesados.append({
            'referencia':   anuncio.referencia,
            'titulo':       anuncio.titulo,
            'mostrando':    anuncio.mostrando,
            'tipoTrans':    tipoTrans,
            'tipoProp':     anuncio.tipoProp,
            'ciudad':       anuncio.ciudad,
            'km':           anuncio.kilometro,
            'domicilio':    domicilio,
            'terreno':      anuncio.terreno,
            'unidad':       unidad,
            'habitaciones': anuncio.habitaciones,
            'cochera':      cochera,
            'pileta':       pileta,
            'precio':       precio,
            'descripcion':  anuncio.descripcion,
        })

    context = {
        'anuncios':    anuncios_procesados,
        'ciudades':    ciudades,
        'propiedades': propiedades
    }

    return render(request, 'anuncios/index.html', context)
