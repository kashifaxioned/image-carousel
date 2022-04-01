/* Author: 

*/

let slides = document.querySelectorAll(".carousel-list-item");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let currentSlide = 0;

prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);

function carousel() {
  currentSlide++;
  slides.forEach((slide) => { slide.className = "slideLeft" })
  carouselChange();
}

function carouselChange() {
  if(currentSlide <= 0) currentSlide = slides.length - 1;
  else if(currentSlide >= (slides.length)) currentSlide = 0;
  slides.forEach((slide, index) => {
   if(currentSlide === (index)) slide.style.display = "block";
   else slide.style.display = "none";
  })
}

function handlePrev() {
  currentSlide--;
  slides.forEach((slide) => { slide.className = "slideRight" })
  carouselChange();
  resetInterval();
}

function handleNext() {
  currentSlide++;
  slides.forEach((slide) => { slide.className = "slideLeft" })
  carouselChange();
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(carousel, 3000)
}

let intervalId = setInterval(carousel, 3000)







