const carouselImages = document.querySelectorAll('.carousel-image')
const carouselImagesArray = Array.from(carouselImages);
const currentSlide = document.querySelector('.current-slide');
const currentSlideArray = Array.from(currentSlide);
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
const slideWidth = slides[0].getBoundingClientRect().width;

startCarousel();


function reset() {
    for (let i = 0; i < carouselImagesArray.length; i++) {
        carouselImagesArray[i].style.display = 'none';
        dotsArray[i].style.backround = "background: rgba(0, 0, 0, .25)";
    }
}


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


function startCarousel() {
    reset();

    carouselImagesArray[i].style.display = "block";
    dotsArray[i].style.background = "rgba(0, 0, 0, .75)";
}

function slideLeft() {
    reset();
    carouselImagesArray[i - 1].style.display = "block";
    dotsArray[i - 1].style.background = "rgba(0, 0, 0, .75)";
    i--;
}

function slideRight() {
    reset();
    carouselImagesArray[i + 1].style.display = "block";
    dotsArray[i + 1].style.background = "rgba(0, 0, 0, .75)";
    i++;
}

previousBtn.addEventListener('click', function() {
    if(i === 0){
        i = carouselImagesArray.length;
    }
    slideLeft();
});

nextBtn.addEventListener('click', function() {
    if(i === carouselImagesArray.length - 1){
        i = -1;
    }
    slideRight();
});


// grab carouselImagesArray index of clicked dot

dots.addEventListener('click', e => {
    const targetDot = e.target.closest('span');
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dots.querySelector('.current-slide');
    const targetIndex = dotsArray.findIndex(dot => dot === targetDot)

    const targetSlide = carouselImagesArray[targetIndex];

    console.log(targetIndex, targetSlide)
});