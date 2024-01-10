const carouselImages = document.querySelectorAll(".carousel__container img");

carouselImages.forEach((img, idx) => {
  let gap = idx * 5;
  img.style.transform = `translateX(${idx * 100 + gap}%)`;
});

let curSlide = 0;
let maxSlide = carouselImages.length - 1;
let minSlide = carouselImages.length - carouselImages.length;
const leftArrow = document.querySelector(".carousel__button--left");
const rightArrow = document.querySelector(".carousel__button--right");

// left arrow
leftArrow.addEventListener("click", function () {
  if (curSlide === minSlide) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  carouselImages.forEach((img, idx) => {
    let gap = idx * 5;
    img.style.transform = `translateX(${100 * (idx - curSlide) + gap}%)`;
  });
});

// right arrow
rightArrow.addEventListener("click", function () {
  // if current slide is at final slide, restart, otherwise, add one
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  carouselImages.forEach((img, idx) => {
    let gap = idx * 5;
    img.style.transform = `translateX(${100 * (idx - curSlide) + gap}%)`;
  });
});

const centeredImg = window.innerWidth / 2;
console.log(centeredImg);
// 1. center first image: click left or right, style curSlide as centered in viewport
// 5. ensure prev and next slides stick out
