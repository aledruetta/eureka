var HTMLOption = '<option value="%value%">%text%</option>';
var HTMLAnuncio = '<div class="thumbnail anuncio">' +
    '<img src="%foto%" alt="%titulo-alt%">' +
    '<div class="tipo-precio">' +
      '<div class="tipo-precio-inner">' +
        '<span>%precio%</span>' +
      '</div>' +
    '</div>' +
    '<ol class="breadcrumb">' +
      '<li>%tipoTrans%</li>' +
      '<li>%tipoProp%</li>' +
      '<li class="active">%ciudad%</li>' +
    '</ol>' +
    '<div class="caption anuncio-detalles">' +
      '<h3 class="anuncio-titulo">%titulo%</h3>' +
      '<a href="#" class="btn btn-primary" role="button">Más detalles</a>' +
    '</div>' +
'</div>';

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
        'foto': 'images/8067-01.jpg',
        'precio': '$ 2.000.000',
        'titulo': 'Excepcional Casa en Villa California',
        'tipoTrans': 'Venta',
        'tipoProp': 'Casa',
        'ciudad': 'Rincón',
    },
    {
        'foto': 'images/8068-01.jpg',
        'precio': '$ 6.000',
        'titulo': 'Casa en Buen Estado, Centro',
        'tipoTrans': 'Alquiler',
        'tipoProp': 'Casa',
        'ciudad': 'Santa Fe',
    },
];

options.search.appendCities = function() {

    $ciudad = $('#ciudad');

    this.cities.forEach(function(city) {

        var formattedOption = HTMLOption
            .replace('%value%', city.value)
            .replace('%text%', city.text);

        $ciudad.append(formattedOption);
    });
};

options.search.appendTipoProp = function() {

    $tipoProp = $('#tipoProp');

    this.tipoProp.forEach(function(prop) {

        var formattedOption = HTMLOption
            .replace('%value%', prop.value)
            .replace('%text%', prop.text);

        $tipoProp.append(formattedOption);
    });
};

anuncios.append = function() {

    $resultados = $('#resultados');

    this.forEach(function(anuncio) {

      var formattedAnuncio = HTMLAnuncio
        .replace('%foto%', anuncio.foto)
        .replace('%precio%', anuncio.precio)
        .replace('%titulo-alt%', anuncio.titulo)
        .replace('%titulo%', anuncio.titulo)
        .replace('%tipoTrans%', anuncio.tipoTrans)
        .replace('%tipoProp%', anuncio.tipoProp)
        .replace('%ciudad%', anuncio.ciudad);

      $resultados.append(formattedAnuncio);
    });

};
