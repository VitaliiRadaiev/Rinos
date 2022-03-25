let $promoHeader = document.querySelector('.promo-header');
if ($promoHeader) {
    let sliderImage, sliderContent;
    let length = $promoHeader.querySelector('.promo-header__body .swiper-wrapper').children.length;
   
    if(length === 1) {
        $promoHeader.querySelector('.promo-header__body').classList.add('_one');
    }
    

    sliderImage = new Swiper($promoHeader.querySelector('.promo-header__images'), {
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        touchRatio: 0,
        watchOverflow: true,
        watchSlidesVisibility: true,
        //simulateTouch: false,
        loop: true,
        //preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
    });

    let option = {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1600,
        watchOverflow: true,
        watchSlidesVisibility: true,
        loop: true,
        touchRatio: 0,
        navigation: {
            nextEl: $promoHeader.querySelector('.promo-header__btn-next'),
            prevEl: $promoHeader.querySelector('.promo-header__btn-prev'),
        },
        pagination: {
            el: $promoHeader.querySelector('.swiper-pagination'),
            clickable: true,
        },
    }

    if(length > 2) {
        option = {
            ...option,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            touchRatio: 1,
        }
    }

    sliderContent = new Swiper($promoHeader.querySelector('.promo-header__body .swiper-container'),
        option
    );

    sliderContent.controller.control = sliderImage;
}