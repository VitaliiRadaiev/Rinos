{
    let history = document.querySelector('.history');
    if(history) {
        
        let navSlider = history.querySelector('.history__slider');
        let wrapper = navSlider.querySelector('.swiper-wrapper')
        let navSliderSwiper;
        let autoHeightEl = document.createElement('div');
        autoHeightEl.className = 'history__autoheight';
        history.append(autoHeightEl);

        let initSlide = Array.from(wrapper.children).findIndex(i => i.classList.contains('initial-slide'));

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
                        autoHeightEl.style.height = wrapper.children[e.activeIndex].querySelector('.history__text-wrap').clientHeight + 'px';
                    },
                    afterInit: (e) => {
                        autoHeightEl.style.height = wrapper.children[e.activeIndex].querySelector('.history__text-wrap').clientHeight + 'px';
                    }
                }
            });
        }
    }
}