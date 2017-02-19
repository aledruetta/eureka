$(document).ready(function() {

    // links de navegación página principal
    var $btNavA = $('.bt-nav-a');
    // botones selección tipo de transacción
    var $bgTipoTrans = $('#bt-grp-tipoTrans');
    // índice array botón seleccionado
    var active;

    options.search.appendCities();
    options.search.appendTipoProp();
    anuncios.append();

    /* EventListener botones navegación página principal */
    $btNavA.click(function() {

        if ($(this).html() === 'Venta') {
            active = 0;
        } else if ($(this).html() === 'Alquiler') {
            active = 1;
        } else {
            return;
        }

        toggleBtGrp($bgTipoTrans, active);
    });

    /* EventListener botones selección tipo transacción */
    $bgTipoTrans.children().click(function() {

        var active = $(this).index();
        toggleBtGrp($bgTipoTrans, active);
    });

    /* EventListener botones 'Más detalles' */
    $('.bt-detalles').click(function() {

        var text = $(this).text();
        resetBtDetalles();
        toggleDetalles(text, $(this));
    });
});

function toggleDetalles(text, $btn) {

    if ( text === HTMLAnuncioBtDetallesText ) {
        $btn.siblings('.anuncio-mas-detalles').slideDown('fast');
        $btn.html(HTMLAnuncioBtDetallesInnerUp + ' Menos...');
    } else {
        $btn.html(HTMLAnuncioBtDetallesInnerDown + HTMLAnuncioBtDetallesText);
    }
}

function resetBtDetalles() {

    $('.bt-detalles').siblings('.anuncio-mas-detalles').slideUp('fast');
    $('.bt-detalles').html(HTMLAnuncioBtDetallesInnerDown + HTMLAnuncioBtDetallesText);
}

/* Comportamineto de botones btn-group permitiendo apenas
   un botón activo simultaneamente */
function toggleBtGrp($btGrp, active) {

    var children = $btGrp.children();
    var $childActive = $(children[active]);

    children.each(function() {
        $(this).removeClass('active');
    });

    if (!$childActive.hasClass('active')) {
        $childActive.addClass('active');
    }
}
