$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$(() => {
    $('.js-toggle-menu').on('click', function toggleMenu() {
        $('body').toggleClass('show-menu');
    });


    $(document).on('click', function(event) {
        var $target = $(event.target);
        if(!$target.closest('.header').length &&
            $('body').hasClass('show-menu')) {
            $('body').removeClass('show-menu');
        }
    });
});

$(() => {
    $('.question__descr').hide();

    $('.question__top').on('click', function toggleQuestionDescription() {
        $(this)
            .parent('.question')
            .toggleClass('active')
            .find('.question__descr')
            .slideToggle();
    })
});
