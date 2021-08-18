var slideIndex = 0;
var olderSileIndex = slideIndex;
const sliderList = document.getElementsByClassName('js-slider__item');
const dotList = document.getElementsByClassName('js-slider__dot');

const first = document.getElementById('first');


autoShowSlide();

function currentSlide(current) {
    olderSileIndex = slideIndex;
    slideIndex = current;
    showSlide();
}

function showSlide() {
    for (const sliderItem of sliderList) {
        sliderItem.classList.remove('active');
        sliderItem.classList.remove('next');
        sliderItem.classList.remove('prev');
    }

    for (const dotItem of dotList) {
        dotItem.classList.remove('active');
    }

    if (olderSileIndex < slideIndex) {
        if (slideIndex >= sliderList.length) {
            slideIndex = 0;
        }
        sliderList[slideIndex].classList.add('next');
    }
    else if (olderSileIndex > slideIndex) {
        sliderList[slideIndex].classList.add('prev');
    }

    sliderList[slideIndex].classList.add('active');
    dotList[slideIndex].classList.add('active');   
}

function autoShowSlide() {
    olderSileIndex = slideIndex;
    slideIndex++;
    if (slideIndex >= sliderList.length) {
        olderSileIndex = 0;
    }
    showSlide();
    setTimeout(autoShowSlide, 5000);
}