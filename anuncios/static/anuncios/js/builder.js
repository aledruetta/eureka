var HTMLOption = '<option value="%value%">%text%</option>\n';
var HTMLAnuncioThumbnail = '<div class="col-md-6"><div id="%referencia%" class="thumbnail anuncio"></div></div>\n';
var HTMLAnuncioImgCont = '<div class="anuncio-img-container"></div>';
var HTMLAnuncioImg = '<img class="img-responsive anuncio-img"\n' +
    'src="static/anuncios/images/gallery/%referencia%-%mostrando%-1x.jpg" alt="%titulo%"\n' +
    'srcset="static/anuncios/images/gallery/%referencia%-%mostrando%-1x.jpg 1x, static/anuncios/images/gallery/%referencia%-%mostrando%-2x.jpg 2x">';
var HTMLGalleryImg = '<img class="img-responsive gallery-img" src="static/anuncios/images/gallery/%referencia%-%mostrando%-1x.jpg" alt="%titulo%" ' +
    'srcset="static/anuncios/images/gallery/%referencia%-%mostrando%-1x.jpg 428w, ' +
    'static/anuncios/images/gallery/%referencia%-%mostrando%-2x.jpg 856w">';
var HTMLAnuncioGalleryClick = '<div class="anuncio-mas-imagens">\n' +
    '<span class="glyphicon glyphicon-search anuncio-gallery-click"></span>\n' +
    '</div>';
var HTMLAnuncioPrecio = '<div class="tipo-precio">\n' +
    '<div class="tipo-precio-inner">\n' +
    '<span>%precio%</span>\n' +
    '</div>\n' +
    '</div>\n';
var HTMLAnuncioBreadcrumb = '<ol class="breadcrumb anuncio-breadcrumb">\n' +
    '<li>%tipoTrans%</li>\n' +
    '<li>%tipoProp%</li>\n' +
    '<li>%ciudad%</li>\n' +
    '</ol>\n';
var HTMLAnuncioBtDetallesInnerDown = '<span class="glyphicon glyphicon-eye-open"></span>';
var HTMLAnuncioBtDetallesInnerUp = '<span class="glyphicon glyphicon-eye-close"></span>';
var HTMLAnuncioBtDetallesText = ' Más detalles';
var HTMLAnuncioCaption = '<div class="caption anuncio-detalles">\n' +
    '<h3 class="anuncio-titulo">%titulo%</h3>\n' +
    '<button type="button" class="btn btn-primary bt-detalles">' + HTMLAnuncioBtDetallesInnerDown + HTMLAnuncioBtDetallesText + '</button>\n' +
    '</div>\n';
var HTMLAnuncioCaptionDetalles = '<ul class="list-unstyled collapse anuncio-mas-detalles">\n' +
    '<li><span>Referencia:</span>%referencia%</li>\n' +
    '<li><span>Dirección:</span>%direccion%</li>\n' +
    '<li><span>Terreno:</span>%terreno%</li>\n' +
    '<li><span>Habitaciones:</span>%habitaciones%</li>\n' +
    '<li><span>Cochera:</span>%cochera%</li>\n' +
    '<li><span>Pileta:</span>%pileta%</li>\n' +
    '<li><span>Descripción:</span>%descripcion%</li>\n' +
    '</ul>\n';
var HTMLgalleryClearfix = '<div class="clearfix visible-md visible-lg"></div>\n';

var options = {
    'search': {
        'cities': [{
                'value': 'todas',
                'text': 'Todas',
                'km': false
            },
            {
                'value': 'santa fe',
                'text': 'Santa Fe',
                'km': false
            },
            {
                'value': 'santo tome',
                'text': 'Santo Tomé',
                'km': false
            },
            {
                'value': 'la guardia',
                'text': 'La Guardia',
                'km': true
            },
            {
                'value': 'colastine',
                'text': 'Colastiné',
                'km': true
            },
            {
                'value': 'rincon',
                'text': 'Rincón',
                'km': true
            },
            {
                'value': 'arroyo leyes',
                'text': 'Arroyo Leyes',
                'km': true
            },
        ],
        'tipoProp': [{
                'value': 'todas',
                'text': 'Todas',
            },
            {
                'value': 'casa',
                'text': 'Casa'
            },
            {
                'value': 'departamento',
                'text': 'Departamento'
            },
            {
                'value': 'terreno',
                'text': 'Terreno'
            },
            {
                'value': 'cochera',
                'text': 'Cochera'
            },
            {
                'value': 'galpon',
                'text': 'Galpón'
            },
            {
                'value': 'local',
                'text': 'Local'
            },
            {
                'value': 'oficina',
                'text': 'Oficina'
            },
            {
                'value': 'quinta',
                'text': 'Quinta'
            },
        ],
    },
};

var anuncios = [{
        'referencia': '6069',
        'fotos': 7,
        'mostrando': 1,
        'precio': '$ 1.150.000',
        'titulo': 'Vende Casa Quinta en Los Zapallos Apta para Creditos y PROCREAR!!!',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Los Amarillos a metros del río',
        'habitaciones': 2,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': '15 por 22,5',
        'descripcion': '2 dorm, cocina comedor, baño, galería/cochera para 2 autos, piscina',
    },
    {
        'referencia': '6070',
        'fotos': 6,
        'mostrando': 1,
        'precio': '$ 1.150.000',
        'titulo': 'Vende Casa Quinta en Los Zapallos Apta para Creditos y PROCREAR!!!',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Los Amarillos a metros del río',
        'habitaciones': 2,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': '15 por 22,5',
        'descripcion': '2 dorm, cocina comedor, baño, galería/cochera para 2 autos, piscina',
    },
    {
        'referencia': '6071',
        'fotos': 7,
        'mostrando': 3,
        'precio': '$ 1.150.000',
        'titulo': 'Vende Casa Quinta en Los Zapallos Apta para Creditos y PROCREAR!!!',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Los Amarillos a metros del río',
        'habitaciones': 2,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': '15 por 22,5',
        'descripcion': '2 dorm, cocina comedor, baño, galería/cochera para 2 autos, piscina',
    },
    {
        'referencia': '6072',
        'fotos': 6,
        'mostrando': 3,
        'precio': '$ 1.150.000',
        'titulo': 'Vende Casa Quinta en Los Zapallos Apta para Creditos y PROCREAR!!!',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Los Amarillos a metros del río',
        'habitaciones': 2,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': '15 por 22,5',
        'descripcion': '2 dorm, cocina comedor, baño, galería/cochera para 2 autos, piscina',
    },
];

options.search.appendCities = function() {

    var $ciudad = $('#ciudad');

    this.cities.forEach(function(city) {

        var formattedOption = HTMLOption
            .replace('%value%', city.value)
            .replace('%text%', city.text);

        $ciudad.append(formattedOption);
    });
};

options.search.appendTipoProp = function() {

    var $tipoProp = $('#tipoProp');

    this.tipoProp.forEach(function(prop) {

        var formattedOption = HTMLOption
            .replace('%value%', prop.value)
            .replace('%text%', prop.text);

        $tipoProp.append(formattedOption);
    });
};

/* ANUNCIOS
==================================================== */
anuncios.append = function() {

    var $resultados = $('.resultados-row');
    var count = 1;

    this.forEach(function(anuncio) {

        $resultados.append(HTMLAnuncioThumbnail.replace('%referencia%', anuncio.referencia));

        $('.anuncio').last()
            .append(HTMLAnuncioImgCont)
            .append(HTMLAnuncioBreadcrumb
                .replace('%tipoTrans%', anuncio.tipoTrans)
                .replace('%tipoProp%', anuncio.tipoProp)
                .replace('%ciudad%', anuncio.ciudad))
            .append(HTMLAnuncioCaption.replace(/%titulo%/g, anuncio.titulo));

        $('.anuncio-img-container').last()
            .append(HTMLAnuncioImg
                .replace(/%referencia%/g, anuncio.referencia)
                .replace(/%mostrando%/g, anuncio.mostrando)
                .replace('%titulo%', anuncio.titulo))
            .append(HTMLAnuncioGalleryClick)
            .append(HTMLAnuncioPrecio.replace('%precio%', anuncio.precio));

        $('.anuncio-titulo').last()
            .after(HTMLAnuncioCaptionDetalles
            .replace('%referencia%', anuncio.referencia)
            .replace('%direccion%', anuncio.direccion)
            .replace('%terreno%', anuncio.terreno)
            .replace('%habitaciones%', anuncio.habitaciones)
            .replace('%cochera%', anuncio.cochera)
            .replace('%pileta%', anuncio.pileta)
            .replace('%descripcion%', anuncio.descripcion));

        // Add clearfix class to fix div float in -md and -lg 6 columns
        if (count % 2 === 0) {
            $resultados.append(HTMLgalleryClearfix);
        }

        count++;
    });

};
