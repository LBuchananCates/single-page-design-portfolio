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
3.

```css
body {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.share-button-unclicked {
  width: 4rem;
  height: 4rem;
  position: absolute;
  right: 90px;
  cursor: pointer;
  /* to prevent blue highlight when clicked */
  -webkit-tap-highlight-color: transparent;
}

.triangle {
  position: absolute;
  display: flex;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 30px 30px 0 30px;
  border-color: hsl(217, 19%, 35%) transparent transparent transparent;
  transform: rotate(0deg);
  bottom: -25px;
}
```

Proud of this javascript function that toggles display when clicking the share button; also created an event listener so that when user clicks anywhere outside of the share options dialog box, it hides. Not required in the instructions for building, but thought it would be nice to have 😊

```js
function showShareOptions() {
  var x = document.getElementById("share-options");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.addEventListener("click", function clickOutside(event) {
  let shareButton = document.getElementById("share-button");
  const socialMediaOptions = document.getElementById("share-options");
  if (!shareButton.contains(event.target)) {
    socialMediaOptions.style.display = "none";
  }
});
```

### Continued development

Still need to work on javascript skills, learned a lot more about CSS tricks (the triangle styling was very new to me); finally cleared up my confusion about exactly how to use positions relative vs. absolute (always good to have a refresher!)

### Useful resources

- MDN
- stackoverflow
- css-tricks
- w3 schools
- Figma!!! Was very helpful with getting exact measurements for styling

## Author

- Website - [view it here!](https://whimsical-medovik-9c7c0a.netlify.app)
- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
