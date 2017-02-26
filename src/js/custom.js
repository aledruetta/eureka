$(document).ready(function() {

    // links de navegación página principal
    var $btNavA = $('.bt-nav-link');
    // botones selección tipo de transacción
    var $bgTipoTrans = $('.bt-grp-tipoTrans');
    // índice array botón seleccionado
    var btIndex;

    options.search.appendCities();
    options.search.appendTipoProp();
    anuncios.append();

    // botones "más detalles"
    var $btDetalles = $('.bt-detalles');
    // botones galeria imagens
    var $galleryChevron = $('.gallery-chevron');
    // boton mas-imagens
    var $masImagens = $('.anuncio-mas-imagens');

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
    });

    $masImagens.click(function() {

        var $bt = $(this);
        var $layer = $('.layer-opaque');
        var id = $bt.parent('div').parent('div').attr('id');

        var anuncio = anuncios.find(function(anuncio) {
            if (anuncio.referencia === id) {
                return anuncio;
            }
        });

        $layer.show();

        $layer.append(HTMLGalleryImg
                .replace(/%referencia%/g, anuncio.referencia)
                .replace(/%mostrando%/g, anuncio.mostrando)
                .replace('%titulo%', anuncio.titulo));

        $('.gallery-img-container')
            .append(HTMLGalleryRemove)
            .append(HTMLGalleryChevron.replace(/%posicion%/g, 'left'))
            .append(HTMLGalleryChevron.replace(/%posicion%/g, 'right'));

    });

    $galleryChevron.click(function() {

        var $bt = $(this);
        var ref = $bt.parent('div').parent('div').attr('id');
        var $fotoActual = $($bt.siblings('img')[0]);
        var regex = new RegExp(ref + '-[0-9]*', 'g');

        var anuncio = anuncios.find(function(anuncio) {
            if (anuncio.referencia === ref) {
                return anuncio;
            }
        });

        if ($bt.hasClass('gallery-chevron--right') &&
            (anuncio.mostrando + 1) <= anuncio.fotos) {

            anuncio.mostrando++;
        } else if ($bt.hasClass('gallery-chevron--left') &&
            (anuncio.mostrando - 1) > 0) {

            anuncio.mostrando--;
        }

        var subst = ref + '-' + anuncio.mostrando;

        var src = $fotoActual.attr('src').replace(regex, subst);
        var srcset = $fotoActual.attr('srcset').replace(regex, subst);

        $fotoActual.attr('src', src);
        $fotoActual.attr('srcset', srcset);
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
