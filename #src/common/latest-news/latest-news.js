let $latesNewsList = document.querySelector('.latest-news__list');
if($latesNewsList) {
    let $dateItems = [].slice.call($latesNewsList.querySelectorAll('.latest-news__link-date'));
    if($dateItems.length) {
        let maxWidth = Math.max(...$dateItems.map(item => item.clientWidth));
        $dateItems.forEach(element => {
            element.style.minWidth = maxWidth + 'px';
        });
    }
}