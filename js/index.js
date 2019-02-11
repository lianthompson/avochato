const carouselImages = document.querySelectorAll('.carousel-image')
const currentSlide = document.querySelectorAll('.current-slide');
const track = document.querySelector('.carousel-container--inner');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const dots = document.querySelector('.dot-container')
const dotsArray = Array.from(dots.children);
const currentDot = dots.querySelector('.active');
const current = 0;
let i = 0;
const time = 3000;
const slides = Array.from(track.children);

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

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

function updateDots(currentDot, targetDot){
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
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

dots.addEventListener('click', e => {
    const targetDot = e.target.closest('span');
    if (!targetDot) return;
    
    const currentSlide = document.querySelector('.current-slide');
    const currentDot = dots.querySelector('.current-slide');
    const targetIndex = dotsArray.findIndex(dot => dot === targetDot)
    const targetSlide = carouselImages[targetIndex];

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot);
});



startCarousel();
