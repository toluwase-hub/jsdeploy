const slider = document.querySelector(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let counter = 0;
const cardWidth = 89; 
const visibleCards = -4;
const totalCards = document.querySelectorAll(".digital").length;

nextBtn.addEventListener("click", () => {
  if (counter < totalCards - visibleCards) {
    counter +=3;
    updateSliderPosition();
  }
});

prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter -=3;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${counter * cardWidth}px)`;
}




window.addEventListener('load', () => {
  document.getElementById('spinner').style.display = 'none';
})

