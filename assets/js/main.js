// Location Slide Variable
var maxLocationSlide = 0;
var locationIndex = 0;
const locationList = document.getElementsByClassName('js-location__item');
const locationBtns = document.getElementsByClassName('js-location-btn');
const locationFirst = document.getElementById('location-first');

// Event Slide Variable
var maxEventSlide = 0;
var eventIndex = 0;
const eventList = document.getElementsByClassName('js-event__item');
const eventBtns = document.getElementsByClassName('js-event-btn');
const evenFirst = document.getElementById('event__item-first');



// Suggest Luxstay Slide Variable
var maxSuggestLuxstaySlide = 0;
var suggestLuxstayIndex = 0;
const suggestLuxstayList = document.getElementsByClassName('js-suggest-luxstay__item');
const suggestLuxstayBtns = document.getElementsByClassName('js-suggest-luxstay-btn');
const suggestLuxstayFirst = document.getElementById('suggest-luxstay__item-first');


// Discovery Slide Variable
var maxDiscoverySlide = 0;
var discoveryIndex = 0;
const discoveryList = document.getElementsByClassName('js-discovery__item');
const discoveryBtns = document.getElementsByClassName('js-discovery-btn');
const discoveryFirst = document.getElementById('discovery__item-first');


// User Manual Slide Variable
var maxUserManualSlide = 0;
var userManualIndex = 0;
const userManualList = document.getElementsByClassName('js-user-manual__item');
const userManualBtns = document.getElementsByClassName('js-user-manual__btn');
const userManualFirst = document.getElementById('user-manual__item-first');


changScreen();

window.addEventListener('resize', changScreen);

function changScreen () {
    if(window.innerWidth > 1023) {
        maxLocationSlide = 5;
        maxEventSlide = 3;
        maxSuggestLuxstaySlide = 4;
        maxDiscoverySlide = 3;
        maxUserManualSlide = 5;
    }
    else if (window.innerWidth > 739) {
        maxLocationSlide = 3;
        maxEventSlide = 2;
        maxSuggestLuxstaySlide = 2;
        maxDiscoverySlide = 2;
        maxUserManualSlide = 3;
    }
    else {
        maxLocationSlide = 2;
        maxEventSlide = 1;
        maxSuggestLuxstaySlide = 1;
        maxDiscoverySlide = 1;
        maxUserManualSlide = 1;
    }
    showSlideBtn(locationIndex, locationList, locationBtns, maxLocationSlide);
    showSlideBtn(eventIndex, eventList, eventBtns, maxEventSlide);
    showSlideBtn(suggestLuxstayIndex, suggestLuxstayList, suggestLuxstayBtns, maxSuggestLuxstaySlide);
    showSlideBtn(discoveryIndex, discoveryList, discoveryBtns, maxDiscoverySlide);
    showSlideBtn(userManualIndex, userManualList, userManualBtns, maxUserManualSlide);
} 

function locationSlide(index) {
    locationIndex = checkIndex(locationIndex + index, locationList, maxLocationSlide);
    locationFirst.style.marginLeft = - (locationIndex * (100 / maxLocationSlide)) + "%";
    showSlideBtn(locationIndex, locationList, locationBtns, maxLocationSlide, index);
}

function eventSlide(index) {
    eventIndex = checkIndex(eventIndex + index, eventList, maxEventSlide);
    evenFirst.style.marginLeft = - (eventIndex * (100 / maxEventSlide)) + "%";
    showSlideBtn(eventIndex, eventList, eventBtns, maxEventSlide, index);
}

function suggestLuxstaySlide(index) {
    suggestLuxstayIndex = checkIndex(suggestLuxstayIndex + index, suggestLuxstayList, maxSuggestLuxstaySlide);
    suggestLuxstayFirst.style.marginLeft = - (suggestLuxstayIndex * (100 / maxSuggestLuxstaySlide)) + "%";
    showSlideBtn(suggestLuxstayIndex, suggestLuxstayList, suggestLuxstayBtns, maxSuggestLuxstaySlide, index);
}

function discoverySlide(index) {
    discoveryIndex = checkIndex(discoveryIndex + index, discoveryList, maxDiscoverySlide);
    discoveryFirst.style.marginLeft = - (discoveryIndex * (100 / maxDiscoverySlide)) + "%";
    showSlideBtn(discoveryIndex, discoveryList, discoveryBtns, maxDiscoverySlide, index);
}

function userManualSlide(index) {
    userManualIndex = checkIndex(userManualIndex + index, userManualList, maxUserManualSlide);
    userManualFirst.style.marginLeft = - (userManualIndex * (100 / maxUserManualSlide)) + "%";
    showSlideBtn(userManualIndex, userManualList, userManualBtns, maxUserManualSlide, 0);
}

function checkIndex (index, slideList, maxSlideItem) {
    if(index < 0) {
        return 0;
    }
    else {
        if(index + maxSlideItem > slideList.length) {
            return (slideList.length - maxSlideItem);
        }
        else {
            return index;
        }
    }
}

function showSlideBtn(index, slideList, btnList, maxSlideItem) {  

    if(maxSlideItem > slideList.length) {
        maxSlideItem = slideList.length;
    }

    for (const btn of btnList) {
        btn.classList.remove('active');
        btn.classList.remove('disable');
    }

    if (slideList.length <= maxSlideItem) {
        for (const btn of btnList) {
            btn.classList.add('disable');
        }
    }
    else {
        if (index != 0 ) {
            btnList[0].classList.add('active');
        }
        if (index >= 0 && index < slideList.length - maxSlideItem){
            btnList[1].classList.add('active');
        }
    }
}

// Show elelment wen scroll
const containerList = document.getElementsByClassName('cotainer__content');
window.onscroll = function () {
    for (const containerItem of containerList) {
        const rect = containerItem.getBoundingClientRect();
        var index = (rect.bottom + rect.top) / 2
        if(screen.height - index > 0) {
            containerItem.classList.add('show');
        }
        else {
            containerItem.classList.remove('show');
        }
    }
}

