let $header = document.querySelector('.header');
if($header) {
    let $menu = document.querySelector('.menu');
    let $burger = document.querySelector('.burger');
    let $menuClose = document.querySelector('.menu__menu-close');
    let $body = document.querySelector('body');
    let $menuList = Array.from(document.querySelector('.menu__list').children);
    let $headerBody = document.querySelector('.header__body');
    let headerBodyHeight = $headerBody.clientHeight;

    const setMenuHeight = () => {
        if(document.documentElement.clientWidth < 992) {
            $menu.style.height = document.documentElement.clientHeight + 'px';
        }
    }

    setMenuHeight();

    window.addEventListener('resize', setMenuHeight);

    window.addEventListener('scroll', () => {
        $header.classList.toggle('_is-scroll', window.pageYOffset > 50);
       // headerBodyHeight = $headerBody.clientHeight;
    })

    $burger.addEventListener('click', () => {
        $menu.classList.add('_open');
        $body.classList.add('_lock');
        document.documentElement.classList.add('_lock');
    })
    $menuClose.addEventListener('click', () => {
        $menu.classList.remove('_open');
        $body.classList.remove('_lock');
        document.documentElement.classList.remove('_lock');
    })

    $menuList.forEach(item => {
        let dropList = item.querySelector('.drop-down__list');
        let title = item.querySelector('.drop-down__title');
        let links = item.querySelectorAll('.drop-down__link');

        if(dropList) {
            item.addEventListener('mouseenter', () => {
                if(document.documentElement.clientWidth >= 992) {
                    if(!item.classList.contains('_open')) {
                        item.classList.add('_open');
                        _slideDown(dropList, 210);
                        $headerBody.style.minHeight = headerBodyHeight + dropList.scrollHeight + 20 + 'px';
                    } 
                }
            })
            item.addEventListener('mouseleave', () => {
                if(document.documentElement.clientWidth >= 992) {
                    item.classList.remove('_open');
                    _slideUp(dropList, 200);
                    $headerBody.style.minHeight = headerBodyHeight + 'px';
                    $headerBody.removeAttribute('style');
                }
            })

            title.addEventListener('click', (e) => {
                if(document.documentElement.clientWidth < 992) {
                    e.preventDefault();
                    _slideToggle(dropList);
                    item.classList.toggle('_is-open');
                }
            })
        }

        if(links.length) {
            links.forEach(link => {
                let id = null;
                let home = false;
                let currentPage = false;
                let regExp = new RegExp(window.location.pathname);

                if(link.href.match(/(#\w+)$/)) {
                    id = link.href.match(/(#\w+)$/)[0]
                }


                if(window.location.pathname === '/' || window.location.pathname === '/nl/' || window.location.pathname === '/de/') {
                    home = true;
                }

                if(regExp.test(link.href)) {
                    currentPage = true;
                }

                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    $menu.classList.remove('_open');
                    $body.classList.remove('_lock');

                    if(home) {
                        window.location.href = link.href;
                        return;
                    }

                    if(currentPage) {
                        const getElement = (id) => {
                            let el = document.querySelector(id);

                            const findeParent = (el) => {
                                if(el.parentElement.nodeName === "MAIN") {
                                    return el;
                                } else {
                                    return findeParent(el.parentElement);
                                }
                            }

                            if(el) {
                                return findeParent(el);
                            }
                        }

                        let el = getElement(id);
                        if (el) {
                            if(document.documentElement.clientWidth > 767.98) {
                                window.scrollTo({
                                    top: el.offsetTop - 120,
                                    behavior: 'smooth'
                                })
                            } else {
                                window.scrollTo({
                                    top: el.offsetTop - 70,
                                    behavior: 'smooth'
                                })
                            }
                        }
                    } else {
                        window.location.href = link.href;
                        return false;
                    }

                })
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

