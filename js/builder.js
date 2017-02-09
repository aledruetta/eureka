var HTMLOption = '<option value="%value%">%text%</option>\n';
var HTMLAnuncio = '<div class="col-md-6">\n' +
  '<div class="thumbnail anuncio">\n' +
    // '<img class="img-responsive" src="images/%foto%-sm.jpg" alt="%titulo%">\n' +
    '<img class="img-responsive" src="images/%foto%-sm.jpg" alt="%titulo%" ' +
        'srcset="images/%foto%-sm.jpg 425w, images/%foto%-md.jpg 820w, images/%foto%-lg.jpg 1200w"' +
        'sizes="(max-width: 767px) 100vw, (max-width: 991px) 75vw, 37vw">\n' +
    '<div class="tipo-precio">\n' +
      '<div class="tipo-precio-inner">\n' +
        '<span>%precio%</span>\n' +
      '</div>\n' +
    '</div>\n' +
    '<ol class="breadcrumb">\n' +
      '<li>%tipoTrans%</li>\n' +
      '<li>%tipoProp%</li>\n' +
      '<li class="active">%ciudad%</li>\n' +
    '</ol>\n' +
    '<div class="caption anuncio-detalles">\n' +
      '<h3 class="anuncio-titulo">%titulo%</h3>\n' +
      '<a href="#" class="btn btn-primary" role="button">Más detalles</a>\n' +
    '</div>\n' +
  '</div>\n' +
'</div>\n';
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
        'foto': '8067-01',
        'precio': '$ 2.000.000',
        'titulo': 'Excepcional Casa en Villa California',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
    },
    {
        'foto': '8068-01',
        'precio': '$ 6.000',
        'titulo': 'Casa Buen Estado de Conservación, Centro',
        'tipoTrans': 'Alquiler',
        'tipoProp': 'Casa',
        'ciudad': 'Santa Fe',
    },
    {
        'foto': '8068-01',
        'precio': '$ 6.000',
        'titulo': 'Casa Buen Estado de Conservación, Centro',
        'tipoTrans': 'Alquiler',
        'tipoProp': 'Casa',
        'ciudad': 'Santa Fe',
    },
    {
        'foto': '8067-01',
        'precio': '$ 2.000.000',
        'titulo': 'Excepcional Casa en Villa California',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
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

anuncios.append = function() {

    var $resultados = $('#resultados > .row');
    var count = 1;

    this.forEach(function(anuncio) {

      var formattedAnuncio = HTMLAnuncio
        .replace(/%foto%/g, anuncio.foto)
        .replace('%precio%', anuncio.precio)
        .replace(/%titulo%/g, anuncio.titulo)
        .replace('%tipoTrans%', anuncio.tipoTrans)
        .replace('%tipoProp%', anuncio.tipoProp)
        .replace('%ciudad%', anuncio.ciudad);

      $resultados.append(formattedAnuncio);

      // Add clearfix class to fix div float in -md and -lg 6 columns
      if (count % 2 === 0) {
        $resultados.append(HTMLgalleryClearfix);
      }

      count++;
    });

};
