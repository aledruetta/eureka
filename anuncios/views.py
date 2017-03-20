from django.shortcuts import render
from .models import Anuncio, Ciudad, TipoPropiedad
import locale


def home(request):
    # Objetos Base de Datos
    anuncios = Anuncio.objects.all()
    destacados = anuncios.filter(
        activo=True,
        destacado=True,
    ).order_by('-creado')[:5]
    ciudades = Ciudad.objects.all()
    propiedades_tipo = TipoPropiedad.objects.all()

    anuncios_procesados = list()

    for anuncio in destacados:
        # Domicilio
        altura = anuncio.numero - (anuncio.numero % 100)

        prepos = ''
        if altura > 0:
            prepos = 'al '
        else:
            altura = ''

        domicilio = '{tipo} {nombre} {prep}{altura}'.format(
            tipo=anuncio.tipoDom,
            nombre=anuncio.domicilio.title(),
            prep=prepos,
            altura=altura,
        )

        # Terreno
        if anuncio.unidad == 'M':
            unidad = 'm²'
        elif anuncio.unidad == 'H':
            unidad = 'Ha'

        # Transacción
        if anuncio.tipoTrans == 'V':
            tipoTrans = 'Venta'
        elif anuncio.tipoTrans == 'A':
            tipoTrans = 'Alquiler'

        # Pileta
        if anuncio.pileta:
            pileta = 'Sí'
        else:
            pileta = 'No'

        # Cochera
        cochera_base = str(anuncio.cochera) + 'vehículo'
        if anuncio.cochera == 1:
            cochera = cochera_base
        elif anuncio.cochera > 1:
            cochera = cochera_base + 's'
        else:
            cochera = 'No'

        # Moneda
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

    # Diccionario de objetos pasados para la renderización
    context = {
        'anuncios':    anuncios_procesados,
        'ciudades':    ciudades,
        'propiedades': propiedades_tipo,
    }

    # Renderiza template y retorna HTTPResponse
    return render(request, 'anuncios/index.html', context)
