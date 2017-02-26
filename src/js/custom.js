$(document).ready(function() {

    // links de navegación página principal
    var $btNavA = $('.bt-nav-link');
    // botones selección tipo de transacción
    var $bgTipoTrans = $('.bt-grp-tipoTrans');
    // índice array botón seleccionado
    var btIndex;
    var $gallery = $('.gallery-img-container');

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

        var $open = $(this);
        var $layer = $('.layer-opaque');
        var $img = $('.gallery-img');
        var $close = $('.gallery-remove');

        var id = $open.parent('div').parent('div').attr('id');
        var anuncio = anuncios.find(function(anuncio) {
            if (anuncio.referencia === id) {
                return anuncio;
            }
        });

        $img.remove();
        $gallery.append(HTMLGalleryImg
                .replace(/%referencia%/g, anuncio.referencia)
                .replace(/%mostrando%/g, anuncio.mostrando)
                .replace('%titulo%', anuncio.titulo));

        $layer.show();

        $close.click(function() {
            $layer.hide();
        });
    });

    $galleryChevron.click(function() {

        var $chevron = $(this);
        var $fotoActual = $($chevron.siblings('img')[0]);

        var tmp = $fotoActual.attr('src').replace('build/images/gallery/', '');
        var id = tmp.replace(new RegExp('-.*'), '');

        var anuncio = anuncios.find(function(anuncio) {
            if (anuncio.referencia === id) {
                return anuncio;
            }
        });

        $('.gallery-chevron').show();
        var isDifferent = false;

        if ($chevron.hasClass('gallery-chevron--right') &&
            (anuncio.mostrando + 1) <= anuncio.fotos) {

            anuncio.mostrando++;
            isDifferent = true;

            if (anuncio.mostrando + 1 === anuncio.fotos) {
                $chevron.hide();
            }
        } else if ($chevron.hasClass('gallery-chevron--left') &&
            (anuncio.mostrando - 1) > 0) {

            anuncio.mostrando--;
            isDifferent = true;

            if (anuncio.mostrando - 1 === 0) {
                $chevron.hide();
            }
        }

        if (isDifferent) {

            var regex = new RegExp(id + '-[0-9]*', 'g');
            var subst = id + '-' + anuncio.mostrando;

            var $fotoNext = $fotoActual.clone();
            var src = $fotoNext.attr('src').replace(regex, subst);
            var srcset = $fotoNext.attr('srcset').replace(regex, subst);
            $fotoNext.attr('src', src);
            $fotoNext.attr('srcset', srcset);

            $fotoNext.on('load', function() {
                $fotoActual.fadeOut(function() {
                    $gallery.append($fotoNext);
                    $fotoNext.fadeIn();
                    $fotoActual.remove();
                });
            });
        }
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
