(function ($) {
    $('html.no-js').addClass('js').removeClass('no-js');

    $('.nav-toggle').on('click', function (e) {
        e.preventDefault();

        $(this).siblings('.nav-right').toggleClass('is-active');
    })
})(jQuery);
