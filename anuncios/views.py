from django.shortcuts import render
from .models import Anuncio, Ciudad, TipoPropiedad


def home(request):
    anuncios = Anuncio.objects.all()
    anuncios_dest = anuncios.filter(destacado=True).order_by('-creado')
    ciudades = Ciudad.objects.all()
    propiedades = TipoPropiedad.objects.all()
    context = {
        'anuncios': anuncios_dest,
        'ciudades': ciudades,
        'propiedades': propiedades
    }
    return render(request, 'anuncios/index.html', context)
