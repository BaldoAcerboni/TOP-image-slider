const leftArrow = document.getElementById("arr-left");
const rightArrow = document.getElementById("arr-right");
const imgContainer = document.getElementById("img-container");
const imgSlider = document.getElementById("img-slider");
const sliderPosIndicator = document.getElementById("slider-pos");
const posIndicatorArr = Array.from(sliderPosIndicator.children);
let transformCount = 0;
const timer = setInterval(function () {
  moveLeft();
}, 5000);

function moveLeft() {
  transformCount++;
  imgSlider.style.transform = `translateX(-${48 * transformCount}px)`;
  manageEventListeners();
  leftArrow.style.opacity = "1";
  highlightPos();
}

function moveRight() {
  transformCount--;
  imgSlider.style.transform = `translateX(-${48 * transformCount}px)`;
  manageEventListeners();
  rightArrow.style.opacity = "1";
  highlightPos();
}

function manageEventListeners() {
  leftArrow.addEventListener("click", moveRight);
  rightArrow.addEventListener("click", moveLeft);
  leftArrow.style.opacity = "1";
  rightArrow.style.opacity = "1";

  if (transformCount === 3) {
    rightArrow.removeEventListener("click", moveLeft);
    rightArrow.style.opacity = "0.5";
    clearInterval(timer);
    console.log(timer);
  } else if (transformCount === 0) {
    leftArrow.removeEventListener("click", moveRight);
    leftArrow.style.opacity = "0.5";
  }
}

function highlightPos() {
  posIndicatorArr.forEach((e) => {
    if (posIndicatorArr.indexOf(e) === transformCount) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
}

function selectSlide(e) {
  transformCount = posIndicatorArr.indexOf(e.target);
  imgSlider.style.transform = `translateX(-${48 * transformCount}px)`;
  manageEventListeners();
  highlightPos();
}

posIndicatorArr.forEach((e) => {
  e.addEventListener("click", selectSlide);
});

manageEventListeners();
