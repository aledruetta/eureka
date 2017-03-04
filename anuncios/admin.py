from django.contrib import admin
from .models import Anuncio
from .models import Ciudad
from .models import TipoDomicilio
from .models import TipoPropiedad


class AnuncioAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'tipoProp', 'tipoTrans', 'ciudad')
    list_filter = ('creado', 'activo', 'destacado')
    search_fields = ('titulo', 'descripcion')


admin.site.register(Anuncio, AnuncioAdmin)
admin.site.register(Ciudad)
admin.site.register(TipoDomicilio)
admin.site.register(TipoPropiedad)
