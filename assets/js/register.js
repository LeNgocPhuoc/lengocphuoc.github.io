// Show languages option box
const languagesBtns = document.querySelectorAll('.js-header-languages');
for(const languagesBtn of languagesBtns)
{
    languagesBtn.onclick = function (event) {
        event.stopPropagation();
        if(this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            this.classList.add('active');
        }
    }
}

// Stop Propagation of languages option box
const languagesBoxList = document.querySelectorAll('.js-languagues-option');
for (const languagesBoxItem of languagesBoxList) {
    languagesBoxItem.onclick = function(event) {
    event.stopPropagation();
    }
}

document.onclick = function () {
    // Hidden languages option box when click outside
    for(const languagesBtn of languagesBtns) {
        if(languagesBtn.classList.contains('active')) {
            languagesBtn.classList.remove('active');
        }
    }
}



