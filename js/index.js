let acc = document.getElementsByClassName("up-down-button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let panel = document.getElementsByClassName("answer");
    if (panel[i].style.maxHeight) {
      panel[i].style.maxHeight = null;
      acc[i].style.backgroundImage = "url(/icons/down.svg)";
    } else {
      panel[i].style.maxHeight = panel[i].scrollHeight + "px";
      acc[i].style.backgroundImage = "url(/icons/up.svg)";
    }
  });
}



const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".btn-portfolio");
const carouselChildrens = [...carousel.children];

carouselMoving(
  document.querySelector(".carousel"),
  document.querySelector(".carousel").querySelector(".card").offsetWidth, 
  document.querySelectorAll(".btn-portfolio"), 
  [...document.querySelector(".carousel").children]
);

carouselMoving(
  document.querySelector(".reviews"),
  document.querySelector(".reviews").querySelector(".review-card").offsetWidth, 
  document.querySelectorAll(".btn-testimonials"), 
  [...document.querySelector(".reviews").children]
);



function carouselMoving(carousel, firstCardWidth, arrowBtns, carouselChildrens) {

  let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  carousel.classList.add("no-transition");
  carousel.scrollLeft = carousel.offsetWidth;
  carousel.classList.remove("no-transition");

  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });

}






const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const width = screen.width;
let prevButton;
let nextButton;
if (width > 390) {
  prevButton = document.getElementById("slide-arrow-prev1");
  nextButton = document.getElementById("slide-arrow-next1");
} else {
  prevButton = document.getElementById("slide-arrow-prev2");
  nextButton = document.getElementById("slide-arrow-next2");
}

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});







const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    hamburger.style.border = '1px solid var(--dark-12)';
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburger.style.border = 'none';
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)