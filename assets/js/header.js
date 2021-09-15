// Add and remove class active in header search item
const headerSearchActiveList = document.querySelectorAll('.js-header-search__input');
for (const headerSearchActive of headerSearchActiveList) {
    headerSearchActive.onclick = function (event) {
        event.stopPropagation();
        if (!this.classList.contains('active')) {
            for(var i = 0; i < headerSearchActiveList.length; i++) {
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


// Genarate Calendar Box
var date = new Date(),
    currentMonth = date.getMonth(),
    currentYear = date.getFullYear();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octorber', 'November', 'December'];

var monthOfYears = document.getElementsByClassName('calendar__moth-of-year');
var dateList = document.getElementsByClassName('calendar__date-list');

function daysInMonth (month, year) {
    return new Date(year, month + 1, 0).getDate();
}

function getPrevDate(currentMonth, currentYear) {
    var prevMonth, prevYear;
    if(currentMonth === 0) {
        prevMonth = 11;
        prevYear = currentYear - 1;
    }
    else {
        prevMonth = currentMonth - 1;
        prevYear = currentYear;
    }
    return new Date(prevYear, prevMonth);
}

function getNextDate(currentMonth, currentYear) {
    var nextMonth, nextYear;
    if(currentMonth === 11) {
        nextMonth = 0;
        nextYear = currentYear + 1;
    }
    else {
        nextMonth = currentMonth + 1;
        nextYear = currentYear;
    }
    return new Date(nextYear, nextMonth);
}

function generateCalender(month, year) {
    var nextDate = getNextDate(month, year);
    var nextMonth = nextDate.getMonth();
    var nextYear = nextDate.getFullYear();
    var days = daysInMonth(month, year);
    var nextDays = daysInMonth(nextMonth, nextYear);
    monthOfYears[0].innerHTML = `${months[month]} ${year}`;  
    monthOfYears[1].innerHTML = `${months[nextMonth]} ${nextYear}`;
    var htmlCurrentDays = '';
    for(let i = 1; i <= days; i++) {
        var iDay = new Date(year, month, i).setHours(0,0,0,0);
        if( iDay === date.setHours(0,0,0,0)) {
            htmlCurrentDays += `<li class="calendar__date active picker">${i}</li>`;
        }
        else if(iDay < date.setHours(0,0,0,0)) {
            htmlCurrentDays += `<li class="calendar__date">${i}</li>`;
        } else {
            htmlCurrentDays += `<li class="calendar__date active">${i}</li>`;
        }
    }
    dateList[0].innerHTML = htmlCurrentDays;
    var firstCurrentDate = dateList[0].querySelector('.calendar__date');
    var startCurrentColumn = (new Date(year, month, 1).getDay() + 6) % 7 + 1;
    firstCurrentDate.style.gridColumnStart = `${startCurrentColumn}`;

    var htmlNextDays = '';
    for(let i = 1; i <= nextDays; i++) {
        var iDay = new Date(nextYear, nextMonth, i).setHours(0,0,0,0);
        if(iDay === date.setHours(0,0,0,0)) {
            htmlNextDays += `<li class="calendar__date active picker">${i}</li>`;
        }
        else if(iDay < date.setHours(0,0,0,0)) {
            htmlNextDays += `<li class="calendar__date">${i}</li>`;
        } else {
            htmlNextDays += `<li class="calendar__date active">${i}</li>`;
        }
    }
    dateList[1].innerHTML = htmlNextDays;
    var firstNextDate = dateList[1].querySelector('.calendar__date');
    var startNextColumn = (new Date(nextYear, nextMonth, 1).getDay() + 6) % 7 + 1;
    firstNextDate.style.gridColumnStart = `${startNextColumn}`;  
}

generateCalender(currentMonth, currentYear);

var nextMonthBtn = document.querySelector('.change-month-btn.next');
nextMonthBtn.addEventListener('click', function(){
    var monthAndYearArr = monthOfYears[0].textContent.split(" ");
    var nextMonth = getNextDate(months.indexOf(monthAndYearArr[0]), Number(monthAndYearArr[1]));
    generateCalender(nextMonth.getMonth(), nextMonth.getFullYear());
})

var prevMonthBtn = document.querySelector('.change-month-btn.prev');
prevMonthBtn.addEventListener('click', function(){
    var monthAndYearArr = monthOfYears[0].textContent.split(" ");
    var prevMonth = getPrevDate(months.indexOf(monthAndYearArr[0]), Number(monthAndYearArr[1]));
    generateCalender(prevMonth.getMonth(), prevMonth.getFullYear());
})



