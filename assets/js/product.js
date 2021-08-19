const filerList = document.querySelectorAll('.filter__item');
const filerHasBoxList = document.querySelectorAll('.filter__item--has-box');
const filterBox = document.querySelectorAll('.filter-box');

for (const filerItem of filerList) {
    filerItem.addEventListener('click', function(event){
        event.stopPropagation();
        if (filerItem.classList.contains('active')) {
            filerItem.classList.remove('active');
        } else {
            for (const filerHasBoxItem of filerHasBoxList) {
                filerHasBoxItem.classList.remove('active');
            }
            filerItem.classList.add('active');
        }
    });
}

for (const item of filterBox) {
    console.log('click');
    item.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

document.onclick = function() {
    for (const filerHasBoxItem of filerHasBoxList) {
        filerHasBoxItem.classList.remove('active');
    }
}

    
