$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.menu').slideToggle();
    });

    new WOW().init();

    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle();
    });

    Fancybox.bind('[data-fancybox="gallery"]', {});

    $('.scroll-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});