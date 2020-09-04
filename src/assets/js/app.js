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

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});


$(() => {
   $('.js-toggle-advanced-filter').on('click', function toggleAdvancedFilter() {
     $('.filter__dropdown').slideToggle();
   });
});

$(() => {
    $('.object__slider').owlCarousel({
        nav: true,
        items: 1,
        loop: false,
        dots: true,
        smartSpeed: 800,
        lazyLoad: true,
        navText: ["<svg width='8' height='11' viewBox='0 0 8 11' xmlns='http://www.w3.org/2000/svg'><path d='M6.5 1L2 5.5L6.5 10' stroke-width='2'/></svg>", "<svg width='7' height='11' viewBox='0 0 7 11' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L5.5 5.5L1 10' stroke-width='2'/></svg>"],
    });
});