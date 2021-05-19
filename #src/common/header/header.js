let $header = document.querySelector('.header');
if($header) {
    let $menu = document.querySelector('.menu');
    let $burger = document.querySelector('.burger');
    let $menuClose = document.querySelector('.menu__menu-close');
    let $body = document.querySelector('body');
    let $menuList = Array.from(document.querySelector('.menu__list').children);
    let $headerBody = document.querySelector('.header__body');
    let headerBodyHeight = $headerBody.clientHeight;

    window.addEventListener('scroll', () => {
        $header.classList.toggle('_is-scroll', window.pageYOffset > 50);
        headerBodyHeight = $headerBody.clientHeight;
    })

    $burger.addEventListener('click', () => {
        $menu.classList.add('_open');
        $body.classList.add('_lock');
    })
    $menuClose.addEventListener('click', () => {
        $menu.classList.remove('_open');
        $body.classList.remove('_lock');
    })

    $menuList.forEach(item => {
        let dropList = item.querySelector('.drop-down__list');
        
        if(dropList) {
            item.addEventListener('mouseenter', () => {
                if(document.documentElement.clientWidth >= 992) {
                    if(!item.classList.contains('_open')) {
                        item.classList.add('_open');
                        _slideDown(dropList, 400);
                        $headerBody.style.minHeight = headerBodyHeight + dropList.scrollHeight + 20 + 'px';
                    } 
                }
            })
            item.addEventListener('mouseleave', () => {
                if(document.documentElement.clientWidth >= 992) {
                    item.classList.remove('_open');
                    _slideUp(dropList, 300);
                    $headerBody.style.minHeight = headerBodyHeight + 'px';
                    $headerBody.removeAttribute('style');
                }
            })

            item.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    _slideToggle(dropList);
                    item.classList.toggle('_is-open');
                }
            })
        }
    })
}

(function dropDownInit() {
    let $elements = [].slice.call(document.querySelectorAll('.drop-down'));
    if($elements.length) {
        $elements.forEach(element => {
            let dropList = element.querySelector('.drop-down__list');
            element.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    _slideToggle(dropList);
                    element.classList.toggle('_is-open');
                }
            })
        });
    }
})()

