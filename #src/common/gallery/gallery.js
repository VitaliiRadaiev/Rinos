let gallerys = [].slice.call(document.querySelectorAll('.gallery'));
if(gallerys.length) {
    gallerys.forEach(gallery => {
        let dataSlider = new Swiper(gallery.querySelector('.gallery__slider'), {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            loop: true,
            preloadImages: false,
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