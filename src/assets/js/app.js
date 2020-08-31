$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
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
