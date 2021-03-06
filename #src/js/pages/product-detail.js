let $specifications = document.querySelector('.specifications');
if ($specifications) {
    let $tables = $specifications.querySelectorAll('.specifications__table');
    let $inner = $specifications.querySelector('.specifications__inner');
    let $btn = $specifications.querySelector('.specifications__btn');
    let $bottomText = $specifications.querySelector('.text-block');

    if ($tables.length) {
        let height = 648;

        if (document.documentElement.clientWidth < 768) height = 448;

        if ($inner.scrollHeight < height) {
            $specifications.classList.add('_table-is-small');
        } else {
            $btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!$specifications.classList.contains('_table-open')) {
                    $specifications.classList.add('_table-open');
                    $specifications.style.height = $inner.scrollHeight + 40 + 'px';
                    $btn.innerText = 'Close specifications';
                } else {
                    $specifications.classList.remove('_table-open');
                    $specifications.style.height = height + 'px';
                    $btn.innerText = 'Expand specifications';
                }
            })

            window.addEventListener('resize', () => {
                if ($specifications.classList.contains('_table-open')) {
                    $specifications.style.height = $inner.scrollHeight + 40 + 'px';
                }
            })
        }
    } else {
        if ($btn) {
            $btn.style.display = "none";
        }
    }
}




let $floorColor = document.querySelector('.floor__color');
if ($floorColor) {
    // init == 
    let activeId = document.querySelector('.floor__color-list-item.active').dataset.tab;
    if (activeId) {
        let img = document.querySelector(`.floor__color-preview img[data-tab="${activeId}"]`);
        let text = document.querySelector(`.floor__type-text-item[data-tab="${activeId}"]`);

        if (img) {
            img.classList.add('active');
        }
        if (text) {
            text.classList.add('active');
        }
    }

    // handler ===
    let images = document.querySelectorAll('.floor__color-preview img[data-tab]');
    let texts = document.querySelectorAll('.floor__type-text-item[data-tab]')
    let triggers = document.querySelectorAll('.floor__color-list-item[data-tab]');

    if (triggers.length && images.length) {
        triggers.forEach(item => {
            let id = item.dataset.tab;
            if (!id) return;

            let img = document.querySelector(`.floor__color-preview img[data-tab="${id}"]`)
            let text = document.querySelector(`.floor__type-text-item[data-tab="${id}"]`)

            if(img && text) {
                
            item.addEventListener('click', (e) => {
                e.preventDefault();

                item.classList.add('active');

                triggers.forEach(i => {
                    if (i === item) return;
                    i.classList.remove('active');
                })

                images.forEach(i => {
                    if (i === img) {
                        i.classList.add('active')
                    } else {
                        i.classList.remove('active')
                    }
                })

                texts.forEach(i => {
                    if (i === text) {
                        i.classList.add('active')
                    } else {
                        i.classList.remove('active')
                    }
                })
            })
            }
        })
    }
}





let $floortypeSelect = document.querySelector('#floortype');
if ($floortypeSelect) {
    let $floorImg = document.querySelector('.floor__img img');
    $floortypeSelect.addEventListener('change', () => {
        if ($floorImg) {
            $floorImg.src = $floortypeSelect.value;
            $floorImg.parentElement.classList.add('_loading');

            $floorImg.onload = () => {
                $floorImg.parentElement.classList.remove('_loading');
            }
            $floorImg.onerror = () => {
                $floorImg.parentElement.classList.remove('_loading');
            }
        }
    })
}