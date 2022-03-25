let gallerys = [].slice.call(document.querySelectorAll('.gallery'));
if(gallerys.length) {
    let length = document.querySelector('.gallery__slider .swiper-wrapper').children.length;
    gallerys.forEach(gallery => {
        let dataSlider = new Swiper(gallery.querySelector('.gallery__slider'), {
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: length == 1 ? false : true,
            preloadImages: false,
            watchOverflow: true,
            lazy: {
            	loadPrevNext: true,
            },
            // Dotts
            pagination: {
            	el: gallery.querySelector('.swiper-pagination'),
            	clickable: true,
            },
        });
    });
}