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
        if ($(this).hasClass('parentIsActive')) {
            $(this)
                .removeClass('parentIsActive')
                .parent('.question')
                .removeClass('active')
                .find('.question__descr')
                .slideUp();
        } else {
            $('.question').removeClass('active');
            $('.question__descr').slideUp();

            $(this)
                .addClass('parentIsActive')
                .parent('.question')
                .toggleClass('active')
                .find('.question__descr')
                .slideToggle();
        }

    })
});

$(() => {
    $('.js-tel').mask("+7 (999) 999-99-99");
});

$(() => {
    $(".js-select").select2({
        minimumResultsForSearch: -1,
    });
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
    let timer2 = "15:00";
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
    $('[data-fancybox]').fancybox({
        animationDuration: 600,
        touch: false
    });
});

$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $('.dropdown-toggle').dropdown()
});

$(() => {
    $('.js-close-changePassword').on('click', function closeChangePasswordDropdown(e) {
        e.preventDefault();
        $('#changePassword').dropdown('hide');
    });
});

$(() => {
    if ( $(window).width() > 1200 ) {
        $.fn.parallax = function(resistance, mouse) {
            $el = $(this);
            TweenLite.to($el, 0.2, {
                x: -((mouse.clientX - window.innerWidth / 2) / resistance),
                y: -((mouse.clientY - window.innerHeight / 2) / resistance)
            });
        };
        $(document).mousemove(function(e) {
            $('.begin__decor--1').parallax(-30, e);
            $('.begin__video-decor--1').parallax(105, e);
            $('.begin__video-decor--2').parallax(-75, e);
            $('.begin__decor--2').parallax(30, e);

            $('.stories__decor--1').parallax(-30, e);
            $('.stories__video-decor--1').parallax(105, e);
            $('.stories__video-decor--2').parallax(-75, e);
            $('.stories__decor--2').parallax(30, e);

            $('.area-info__decor--1').parallax(-30, e);
            $('.area-info__video-decor--1').parallax(105, e);
            $('.area-info__video-decor--2').parallax(-75, e);
            $('.area-info__decor--2').parallax(30, e);
        });
    }
});


$(() => {
    $('.partners-slider').owlCarousel({
        loop: false,
        smartSpeed: 800,
        lazyLoad: true,
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
                margin: 20,
            },
            800 : {
                dots: true,
                items: 3,
                margin: 20,
            },
            1200 : {
                nav: true,
                dots: false,
                items: 4,
                margin: 0,
            },
        }
    });
});

$(() => {
    $('.reserved__slider').owlCarousel({
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
    $('.partners-offers__slider').owlCarousel({
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
    $('.register-form').hide();

    $('.js-show-register').on('click', function showRegisterForm(e) {
        e.preventDefault();

        $('.login-form').hide();
        $('.register-form').show();
    });



    $('.js-show-login').on('click', function showLoginForm(e) {
        e.preventDefault();

        $('.login-form').show();
        $('.register-form').hide();
    });
});
