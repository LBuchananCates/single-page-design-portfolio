# Frontend Mentor - Article preview component solution

[Click here to see my website live!](https://verdant-tanuki-988258.netlify.app)

![desktop view](<Screen Shot 2024-01-04 at 4.44.50 PM.png>)
![tablet view](<Screen Shot 2024-01-04 at 4.45.49 PM.png>)
![mobile view](<Screen Shot 2024-01-04 at 4.44.35 PM.png>)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Click arrow buttons on photo slider to look through project photos

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/responsive-profile-page-using-grid-Ry0Deogo_y)
- Live Site URL: [Add live site URL here](https://verdant-tanuki-988258.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

In order:

1. Have been working on how to neatly style elements that I want to be centered in the middle of the page (especially on desktop view) using min-height and grid.
2. Using CSS grid instead of flex for multiple viewports
3. Logic required to restart photo slider from first photo and last photo

Proud of my use of CSS grid. Was very fun to use for layout of the hero section; also learned how to use gap for easier spacing, rather than depending on margin and padding as seen in `.portfolio`.

```css
.solutions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 0 8px;
}

.solutions__item:nth-child(1) {
  background-color: var(--vibrant-purple);
  grid-column: span 2;
  grid-row: span 18;
}

.portfolio {
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: center;
}
```

Proud of this javascript function that restarts the photo slider from the beginning upon reaching final slide using right arrow button, and vice versa for the left arrow button 😊 This was my biggest challenge for this project. I had to recode it twice before finding an easier way to make the slider slide.

```js
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
```

### Continued development

Still need to work on javascript skills, learned a lot more about CSS grid and have come to enjoy using it

### Useful resources

- MDN
- stackoverflow
- css-tricks
- w3 schools
- Figma!!! Was very helpful with getting exact measurements for styling

## Author

- Website - [view it here!](https://verdant-tanuki-988258.netlify.app)
- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
