const carouselImages = document.querySelectorAll('.carousel-image')
const track = document.querySelector('.carousel-container--inner');
const slides = Array.from(track.children);
const previousBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
const dotsNav = document.querySelector('.dot-container')
const dots = Array.from(dotsNav.children);
const current = 0;
let i = 0;
const time = 3000;

startCarousel();


function reset() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].style.backround = "background: rgba(0, 0, 0, .25)";
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

function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    console.log(currentDot)
    console.log(targetDot)
}

function startCarousel() {
    reset();
    slides[i].style.display = "block";
    dots[i].style.background = "rgba(0, 0, 0, .75)";
}

function slideLeft() {
    reset();
    slides[i - 1].style.display = "block";
    dots[i - 1].style.background = "rgba(0, 0, 0, .75)";
    i--;
}

function slideRight() {
    reset();
    slides[i + 1].style.display = "block";
    dots[i + 1].style.background = "rgba(0, 0, 0, .75)";
    i++;
}

previousBtn.addEventListener('click', function() {
    if(i === 0){
        i = slides.length;
    }
    slideLeft();
});

nextBtn.addEventListener('click', function() {
    // const currentSlide = track.querySelector('.current-slide');
    // const nextSlide = currentSlide.nextElementSibling;
    //  const currentDot = dotsNav.querySelector('.current-slide');
    //  const nextDot = currentDot.nextElementSibling;
    if(i === slides.length - 1){
        i = -1;
    }
    slideRight();
    // updateDots(currentDot, nextDot)
});


// grab carouselImagesArray index of clicked dot

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('span');
    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)

    const targetSlide = slides[targetIndex];

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
});