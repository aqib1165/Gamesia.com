let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

function changeSlide(step) {
  showSlide(currentSlideIndex + step);
}

// Auto slide change every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// Initialize the slider
showSlide(currentSlideIndex);



