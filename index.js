let carouselImages = document.querySelectorAll('.carousel-image')
let previousBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');
let dots = document.querySelectorAll('.dot')
let current = 0;
let i = 0;
let time = 3000;
let progressTracker = document.querySelector('progress-container');

function changeImg() {
    startCarousel();
    if(i < carouselImages.length - 1){
        i++

    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);

}

changeImg();

function reset() {
    for (let i = 0; i < carouselImages.length; i++) {
        carouselImages[i].style.display = 'none';
    }
}

function startCarousel() {
    reset();
    carouselImages[i].style.display = "block";
}

function slideLeft() {
    reset();
    carouselImages[i - 1].style.display = "block";
    i--;
}

function slideRight() {
    reset();
    carouselImages[i + 1].style.display = "block";
    i++;
}

previousBtn.addEventListener('click', function() {
    if(i === 0){
        i = carouselImages.length;
    }
    slideLeft();
});

nextBtn.addEventListener('click', function() {
    if(i === carouselImages.length - 1){
        i = -1;
    }
    slideRight();
});

startCarousel();
