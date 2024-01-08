const carouselImages = document.querySelectorAll(".carousel__container img");

carouselImages.forEach((img, idx) => {
  img.style.transform = `translateX(${idx * 100}%)`;
});

let curSlide = 0;
let maxSlide = carouselImages.length - 1;
const leftArrow = document.querySelector(".carousel__button--left");
const rightArrow = document.querySelector(".carousel__button--right");

leftArrow.addEventListener("click", function () {
  curSlide--;
  carouselImages.forEach((img, idx) => {
    img.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});

rightArrow.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  carouselImages.forEach((img, idx) => {
    img.style.transform = `translateX(${100 * (idx - curSlide)}%)`;
  });
});
