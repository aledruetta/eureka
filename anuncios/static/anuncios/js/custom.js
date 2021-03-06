$(document).ready(function() {

    // links de navegación página principal
    var $btNavA = $('.bt-nav-link');
    // botones selección tipo de transacción
    var $bgTipoTrans = $('.bt-grp-tipoTrans');
    // índice array botón seleccionado
    var btIndex;

    var anuncio;
    var $btDetalles = $('.bt-detalles');
    var $openGallery = $('.anuncio-mas-imagens');
    var $layer = $('.layer-opaque');
    var $gallery = $('.gallery-img-container');
    var $closeGallery = $('.gallery-remove');
    var $galleryChevron = $('.gallery-chevron');

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

    // EventListener botón "mas-imagens"
    $openGallery.click(function() {

        var $img = $('.gallery-img');
        var referencia = $(this).parent('div').parent('div').attr('id');

        $.get('/ajax/gallery/', {
            'referencia': referencia,
        }, function(data) {
            anuncio = data;
            anuncio.fotos = 5;

            $img.remove();

            $gallery.append(HTMLGalleryImg
                .replace(/%referencia%/g, anuncio.referencia)
                .replace(/%mostrando%/g, anuncio.mostrando)
                .replace('%titulo%', anuncio.titulo));
            $layer.show();

            toggleChevron(anuncio);
        });
    });

    $galleryChevron.click(function() {

        var $chevron = $(this);
        var $img = $('.gallery-img');

        var tmp = $img.attr('src').replace('build/images/gallery/', '');
        var id = tmp.replace(new RegExp('-.*'), '');

        if (imgWillChange(anuncio)) {

            var $imgNext = $img.clone();
            srcSetChange($imgNext, id, anuncio.mostrando);

            $imgNext.on('load', function() {
                $img.fadeOut(function() {
                    $gallery.append($imgNext);
                    $imgNext.fadeIn();
                    toggleChevron(anuncio);
                    $img.remove();
                });
            });
        }

        function imgWillChange(anuncio) {

            if ($chevron.hasClass('gallery-chevron--right')) {
                if (anuncio.mostrando + 1 <= anuncio.fotos) {
                    anuncio.mostrando++;
                    return true;
                }
            } else if ($chevron.hasClass('gallery-chevron--left')) {
                if (anuncio.mostrando - 1 > 0) {
                    anuncio.mostrando--;
                    return true;
                }
            }
            return false;
        }
    });

    $closeGallery.click(function() {
        $layer.hide();
    });

    function srcSetChange($img, id, mostrando) {

        var regex = new RegExp(id + '-[0-9]*', 'g');
        var subst = id + '-' + mostrando;

        var src = $img.attr('src').replace(regex, subst);
        var srcset = $img.attr('srcset').replace(regex, subst);
        $img.attr('src', src);
        $img.attr('srcset', srcset);
    }

    function toggleChevron(anuncio) {

        $galleryChevron.show();
        if (anuncio.mostrando === 1) {
            $('.gallery-chevron--left').hide();
        } else if (anuncio.mostrando === anuncio.fotos) {
            $('.gallery-chevron--right').hide();
        }
    }

    function toggleDetalles(text, $bt) {

        if (text === HTMLAnuncioBtDetallesText) {
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
