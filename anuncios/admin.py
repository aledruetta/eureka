from django.contrib import admin
from .models import Anuncio
from .models import Ciudad
from .models import TipoDomicilio
from .models import TipoPropiedad

admin.site.register(Anuncio)
admin.site.register(Ciudad)
admin.site.register(TipoDomicilio)
admin.site.register(TipoPropiedad)
