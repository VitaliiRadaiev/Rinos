let $tableTabs = document.querySelector('.table-tabs');
if($tableTabs) {
    let $tabs = $tableTabs.querySelectorAll('td');
    let $tabsContent = document.querySelectorAll('.tabs-content');
    if($tabs.length) {
        let $tabActiveId = $tableTabs.querySelector('td.active').dataset.tab;
        if($tabActiveId) {
            showTabContent($tabActiveId);
        }


        $tabs.forEach($tab => {
            $tab.addEventListener('click', () => {
                let id = $tab.dataset.tab;
                if(id) {
                    showTabContent(id)
                }

                $tab.classList.add('active');

                $tabs.forEach($el => {
                    if($el === $tab) return;

                    $el.classList.remove('active');
                })
            })
        })
    }

    function showTabContent(id) {
        if($tabsContent.length) {
            $tabsContent.forEach($tabContent => {
                $tabContent.dataset.tab === id ? $tabContent.classList.add('_content-show') : $tabContent.classList.remove('_content-show');
            })
        }
    }
}