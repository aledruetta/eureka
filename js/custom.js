$(document).ready(function() {

    var $btNavA = $('.bt-nav-a');
    var $bgTipoTrans = $('#bt-grp-tipoTrans');
    var active;

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

    $bgTipoTrans.children().click(function() {
        
        var active = $(this).index();
        toggleBtGrp($bgTipoTrans, active);
    });
});

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
