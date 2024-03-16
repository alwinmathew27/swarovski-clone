window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("section_bottom");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// nav code
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// slider-------------

const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const searchBar = document.getElementById("searchBar");

const productCards = document.querySelectorAll(".product-card");

function searchProducts() {
  const searchQuery = searchBar.value.toLowerCase();

  productCards.forEach((card) => {
    const productName = card
      .querySelector(".product-brand")
      .textContent.toLowerCase();

    if (productName.includes(searchQuery)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

searchBar.addEventListener("input", searchProducts);
