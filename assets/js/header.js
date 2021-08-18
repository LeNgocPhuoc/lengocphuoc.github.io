// Add and remove class active in header search item
const headerSearchActiveList = document.querySelectorAll('.js-header-search__input');
for (const headerSearchActive of headerSearchActiveList) {
    headerSearchActive.onclick = function (event) {
        event.stopPropagation();
        if (!this.classList.contains('active')) {
            for(var i = 0; i < headerSearchActiveList.length; i++) {
                console.log(i);
                headerSearchActiveList[i].classList.remove('active');
            }
            this.classList.add('active');
        }
        else {
            this.classList.remove('active');
        }
    }
}

// Stop Propagation of Calendar box
const calendarBox = document.querySelector('.js-calendar');
calendarBox.onclick = function (event) {
    event.stopPropagation();
}

// Stop Propagation of guest number option box
const guestOptionBox = document.querySelector('.js-guest-number-option');
guestOptionBox.onclick = function (event) {
    event.stopPropagation();
}

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
    // Remove class active in header search item when click outside
    for (const headerSearchActive of headerSearchActiveList) {
        if(headerSearchActive.classList.contains('active')){
            headerSearchActive.classList.remove('active');
        }
    }

    // Hidden languages option box when click outside
    for(const languagesBtn of languagesBtns) {
        if(languagesBtn.classList.contains('active')) {
            languagesBtn.classList.remove('active');
        }
    }
}



