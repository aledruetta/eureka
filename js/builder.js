var HTMLOption = '<option value="%value%">%text%</option>';

var options = {
    'search': {
        'cities': [
            {'value': 'santa fe', 'text': 'Santa Fe', 'km': false},
            {'value': 'santo tome', 'text': 'Santo Tomé', 'km': false},
            {'value': 'la guardia', 'text': 'La Guardia', 'km': true},
            {'value': 'colastine', 'text': 'Colastiné', 'km': true},
            {'value': 'rincon', 'text': 'Rincón', 'km': true},
            {'value': 'arroyo leyes', 'text': 'Arroyo Leyes', 'km': true},
        ],
        'tipoProp': [
            {'value': 'casa', 'text': 'Casa'},
            {'value': 'departamento', 'text': 'Departamento'},
            {'value': 'terreno', 'text': 'Terreno'},
            {'value': 'cochera', 'text': 'Cochera'},
            {'value': 'galpon', 'text': 'Galpón'},
            {'value': 'local', 'text': 'Local'},
            {'value': 'oficina', 'text': 'Oficina'},
            {'value': 'quinta', 'text': 'Quinta'},
        ],
    },
};

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
