let $specifications = document.querySelector('.specifications');
if($specifications) {
    let $table = $specifications.querySelector('.specifications__table');
    let $btn =  $specifications.querySelector('.specifications__btn');
    let height = 648;

    if(document.documentElement.clientWidth < 768) height = 448;

    if($table.clientHeight < height) {
        $specifications.classList.add('_table-is-small');
    } else {
        $btn.addEventListener('click', (e) => {
            e.preventDefault();
            if(!$specifications.classList.contains('_table-open')) {
                $specifications.classList.add('_table-open');
                $specifications.style.height = $table.clientHeight + 40 + 'px';
                $btn.innerText = 'Close specifications';
            } else {
                $specifications.classList.remove('_table-open');
                $specifications.style.height = height + 'px';
                $btn.innerText = 'Expand specifications';
            }
        })

        window.addEventListener('resize', () => {
            if($specifications.classList.contains('_table-open')) {
                $specifications.style.height = $table.clientHeight + 40 + 'px';
            }
        })
    }
}