var HTMLOption = '<option value="%value%">%text%</option>\n';
var HTMLAnuncioThumbnail = '<div class="col-md-6"><div class="thumbnail anuncio"></div></div>\n';
var HTMLAnuncioImg = '<img class="img-responsive" src="images/%foto%-sm.jpg" alt="%titulo%" ' +
    'srcset="images/%foto%-sm.jpg 425w, images/%foto%-md.jpg 820w, images/%foto%-lg.jpg 1200w"' +
    'sizes="(max-width: 767px) 100vw, (max-width: 991px) 75vw, 35vw">\n';
var HTMLAnuncioPrecio = '<div class="tipo-precio">\n' +
    '<div class="tipo-precio-inner">\n' +
    '<span>%precio%</span>\n' +
    '</div>\n' +
    '</div>\n';
var HTMLAnuncioBreadcrumb = '<ol class="breadcrumb">\n' +
    '<li>%tipoTrans%</li>\n' +
    '<li>%tipoProp%</li>\n' +
    '<li>%ciudad%</li>\n' +
    '</ol>\n';
var HTMLAnuncioBtDetallesText = 'Más detalles';
var HTMLAnuncioCaption = '<div class="caption anuncio-detalles">\n' +
    '<h3 class="anuncio-titulo">%titulo%</h3>\n' +
    '<button type="button" class="btn btn-primary bt-detalles">' + HTMLAnuncioBtDetallesText + '</button>\n' +
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
        'referencia': '8067',
        'foto': '8067-01',
        'precio': '$ 2.000.000',
        'titulo': 'Excepcional Casa en Villa California',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Primera, 200',
        'habitaciones': 3,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': 1200,
        'descripcion': 'Casa ámplia, moderna, 2 suites, lavadero, asador, jardín.',
    },
    {
        'referencia': '8068',
        'foto': '8068-01',
        'precio': '$ 6.000',
        'titulo': 'Casa Buen Estado de Conservación, Centro',
        'tipoTrans': 'Alquiler',
        'tipoProp': 'Casa',
        'ciudad': 'Santa Fe',
        'direccion': 'Calle Segunda, 4000',
        'habitaciones': 8,
        'cochera': 5,
        'pileta': 'no',
        'terreno': 5000,
        'descripcion': 'Casa ámplia, antígua, 4 suites, lavadero, salón de fiestas, establo.',
    },
    {
        'referencia': '8068',
        'foto': '8068-01',
        'precio': '$ 6.000',
        'titulo': 'Casa Buen Estado de Conservación, Centro',
        'tipoTrans': 'Alquiler',
        'tipoProp': 'Casa',
        'ciudad': 'Santa Fe',
        'direccion': 'Calle Segunda, 4000',
        'habitaciones': 8,
        'cochera': 5,
        'pileta': 'no',
        'terreno': 5000,
        'descripcion': 'Casa ámplia, antígua, 4 suites, lavadero, salón de fiestas, establo.',
    },
    {
        'referencia': '8067',
        'foto': '8067-01',
        'precio': '$ 2.000.000',
        'titulo': 'Excepcional Casa en Villa California',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
        'direccion': 'Calle Primera, 200',
        'habitaciones': 3,
        'cochera': 2,
        'pileta': 'sí',
        'terreno': 1200,
        'descripcion': 'Casa ámplia, moderna, 2 suites, lavadero, asador, jardín.',
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

    var $resultados = $('#resultados > .row');
    var count = 1;

    this.forEach(function(anuncio) {

        $('#resultados > .row').append(HTMLAnuncioThumbnail);
        $('.anuncio').last()
            .append(HTMLAnuncioImg.replace(/%foto%/g, anuncio.foto))
            .append(HTMLAnuncioPrecio.replace('%precio%', anuncio.precio))
            .append(HTMLAnuncioBreadcrumb
                .replace('%tipoTrans%', anuncio.tipoTrans)
                .replace('%tipoProp%', anuncio.tipoProp)
                .replace('%ciudad%', anuncio.ciudad))
            .append(HTMLAnuncioCaption.replace(/%titulo%/g, anuncio.titulo));
        $('.anuncio-detalles > h3').last()
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
