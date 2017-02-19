$(document).ready(function() {

    // links de navegación página principal
    var $btNavA = $('.bt-nav-a');
    // botones selección tipo de transacción
    var $bgTipoTrans = $('#bt-grp-tipoTrans');
    // índice array botón seleccionado
    var btIndex;

    options.search.appendCities();
    options.search.appendTipoProp();
    anuncios.append();

    // botones "más detalles"
    var $btDetalles = $('.bt-detalles');

    /* EventListener botones navegación página principal */
    $btNavA.click(function() {

        var $bt = $(this);

        if ($bt.html() === 'Venta') {
            btIndex = 0;
        } else if ($bt.html() === 'Alquiler') {
            btIndex = 1;
        } else {
            return;
        }

        toggleBtGrp($bgTipoTrans, btIndex);
    });

    /* EventListener botones selección tipo transacción */
    $bgTipoTrans.children().click(function() {

        var btIndex = $(this).index();
        toggleBtGrp($bgTipoTrans, btIndex);
    });

    /* EventListener botones 'Más detalles' */
    $btDetalles.click(function() {

        var $bt = $(this);
        var text = $bt.text();

        resetBtDetalles();
        toggleDetalles(text, $bt);
        addGallery();
    });

    function toggleDetalles(text, $bt) {

        if ( text === HTMLAnuncioBtDetallesText ) {
            $bt.siblings('.anuncio-mas-detalles').slideDown('fast');
            $bt.html(HTMLAnuncioBtDetallesInnerUp + ' Menos...');
        } else {
            $bt.html(HTMLAnuncioBtDetallesInnerDown + HTMLAnuncioBtDetallesText);
        }
    }

    function resetBtDetalles() {

        $btDetalles.siblings('.anuncio-mas-detalles').slideUp('fast');
        $btDetalles.html(HTMLAnuncioBtDetallesInnerDown + HTMLAnuncioBtDetallesText);
    }

    function addGallery() {

    }

    /* Comportamineto de botones btn-group permitiendo apenas
    un botón activo simultaneamente */
    function toggleBtGrp($btGrp, btIndex) {

        var children = $btGrp.children();
        var $childActive = $(children[btIndex]);

        children.each(function() {
            $(this).removeClass('active');
        });

        if (!$childActive.hasClass('active')) {
            $childActive.addClass('active');
        }
    }
});
