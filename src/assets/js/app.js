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
    $('.object__list').owlCarousel({
        loop: false,
        smartSpeed: 800,
        lazyLoad: true,
        margin: 30,
        navText: ["<svg width='8' height='11' viewBox='0 0 8 11' xmlns='http://www.w3.org/2000/svg'><path d='M6.5 1L2 5.5L6.5 10' stroke-width='2'/></svg>", "<svg width='7' height='11' viewBox='0 0 7 11' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L5.5 5.5L1 10' stroke-width='2'/></svg>"],
        responsive : {
            0 : {
                dots: true,
                items: 1,
                autoHeight: true,
            },
            600 : {
                dots: true,
                items: 2,
                autoHeight: true,
            },
            800 : {
                dots: true,
                items: 3,
            },
            1200 : {
                nav: true,
                dots: false,
                items: 4,
            },
        }
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

$(() => {
    $('.banner__slider').owlCarousel({
        nav: false,
        items: 1,
        loop: true,
        dots: true,
        smartSpeed: 800,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        navText: ["<svg width='8' height='11' viewBox='0 0 8 11' xmlns='http://www.w3.org/2000/svg'><path d='M6.5 1L2 5.5L6.5 10' stroke-width='2'/></svg>", "<svg width='7' height='11' viewBox='0 0 7 11' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L5.5 5.5L1 10' stroke-width='2'/></svg>"],
    });
    $('.js-banner__nav--prev').on('click', function bannerSliderPrev () {
        $('.banner__slider').trigger('prev.owl.carousel');
    });
    $('.js-banner__nav--next').on('click', function bannerSliderNext () {
        $('.banner__slider').trigger('next.owl.carousel');
    });
});


$(() => {
    // Trigger CSS animations on scroll.
    $(function($) {

        // Function which adds the 'animated' class to any '.animatable' in view
        const doAnimations = function() {

            // Calc current offset and get all animatables
            const offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');

            // Unbind scroll handler if we have no animatables
            if ($animatables.length == 0) {
                $(window).off('scroll', doAnimations);
            }

            // Check all animatables and animate them if necessary
            $animatables.each(function(i) {
                const $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
            });

        };

        // Hook doAnimations on scroll, and trigger a scroll
        $(window).on('scroll', doAnimations);
        $(window).trigger('scroll');

    });
});

$(() => {
    let timer2 = "08:00";
    const interval = setInterval(function() {
        const timer = timer2.split(':');
        let minutes = parseInt(timer[0], 10);
        let seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $(".timer__in").html("<div class='timer__item tac'>"+minutes+"</div><div class='timer__item-delim'>:</div><div class='timer__item tac'>"+seconds+"</div>");
        timer2 = minutes + ':' + seconds;
    }, 1000);
});

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});
