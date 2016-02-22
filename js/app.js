$(document).foundation();
jQuery(document).ready(function ($) {
    //    open popup
    $('.cd-popup-trigger').on('click', function (event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });
    //    close popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('cd-popup-close') || $(event.target).is('cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });
});
