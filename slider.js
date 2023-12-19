const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const leftButton = document.querySelector(".carousel__button--left");
const rightButton = document.querySelector(".carousel__button--right");
const slideWidth = slides[0].getBoundingClientRect().width / 2;

console.log(slideWidth);

// arrange slides next to each other
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//function
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// when click left, move slides to left
leftButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
});

// when click right, move slides to right
rightButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  // move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
});
