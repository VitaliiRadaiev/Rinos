{
    let history = document.querySelector('.history');
    if(history) {
        
        let navSlider = history.querySelector('.history__slider');
        let textSlider = history.querySelector('.history__slider-mob-text');
        let navSliderSwiper;
        let textSliderSwiper;

        if(textSlider) {
            textSliderSwiper = new Swiper(textSlider, {
                slidesPerView: 1,
                spaceBetween: 20,
                speed: 800,
                touchRatio: 0,
                autoHeight: true,
            });
        }

        let initSlide = Math.floor(navSlider.querySelector('.swiper-wrapper').children.length / 2)

        if(navSlider) {
            navSliderSwiper = new Swiper(navSlider, {
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 800,
                initialSlide: initSlide,
                centeredSlides: true,
                slideToClickedSlide: true,
                navigation: {
                    nextEl: history.querySelector('.history__btn.next'),
                    prevEl: history.querySelector('.history__btn.prev'),
                },

                on: {
                    slideChange: (e) => {
                        console.log(e.activeIndex);
                        console.log(textSliderSwiper);
                        textSliderSwiper.slideTo(e.activeIndex)
                    }
                }
            });
        }
    }
}