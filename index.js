let carouselImages = document.querySelectorAll('.carousel-image')
let previousBtn = document.querySelector('#previous');
let nextBtn = document.querySelector('#next');
let current = 0;
let i = 0;
let time = 1000;
let progressTracker = document.querySelector('progress-container');


function changeImg() {
    startCarousel();
    if(i < carouselImages.length - 1){
        i++
    } 
        carouselImages[i];
    console.log('hey')
}

function auto_play(){
    interval = setInterval(function(){
        changeImg();
    }, 3000);
}

auto_play();

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
    carouselImages[current - 1].style.display = "block";
    current--;
}

function slideRight() {
    reset();
    carouselImages[current + 1].style.display = "block";
    current++;
}

previousBtn.addEventListener('click', function() {
    if(current === 0){
        current = carouselImages.length;
    }
    slideLeft();
});

nextBtn.addEventListener('click', function() {
    if(current === carouselImages.length - 1){
        current = -1;
    }
    slideRight();
});

startCarousel();
