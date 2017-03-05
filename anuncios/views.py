from django.shortcuts import render
from .models import Anuncio


def home(request):
    anuncios = Anuncio.objects.all()
    anuncios_dest = anuncios.filter(destacado=True).order_by('-creado')
    context = {'anuncios': anuncios_dest}
    return render(request, 'anuncios/index.html', context)
