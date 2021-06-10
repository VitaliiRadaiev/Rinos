let $promoHeader = document.querySelector('.promo-header');
if ($promoHeader) {
    let sliderImage, sliderContent;

    sliderImage = new Swiper($promoHeader.querySelector('.promo-header__images'), {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        touchRatio: 0,
        //simulateTouch: false,
        loop: true,
        //preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
    });

    sliderContent = new Swiper($promoHeader.querySelector('.promo-header__body .swiper-container'), {
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },

        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        watchOverflow: true,
        loop: true,
        navigation: {
            nextEl: $promoHeader.querySelector('.promo-header__btn-next'),
            prevEl: $promoHeader.querySelector('.promo-header__btn-prev'),
        },
        pagination: {
            el: $promoHeader.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });

    sliderContent.controller.control = sliderImage;
}