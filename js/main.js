$(function () {
    //Con stop se detiene la animación previa
    $('#capitulo-area figure img').click(function () {
        $('body').append('<div class="fondOscuro"></div>');
        var rutaImagen = $(this).parent().parent().find('img').attr('src')
        $('.fondOscuro').append('<img src=" ' + rutaImagen + ' ">');
        $('.fondOscuro').click(function () {
            $(this).remove();

        });
    });
});