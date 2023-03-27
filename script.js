$(document).ready(() => {
    // navbar
    $('.navbar-show-btn').click(() => {
        $('.navbar-collapse').addClass('showNavbar');
    });

    $('.navbar-hide-btn').click(() => {
        $('.navbar-collapse').removeClass('showNavbar');
    });

    // slick slider
    $('.carousel-caption').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // stopping transition
    let resizeTimer;
    $(window).on('resize', () => {
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});