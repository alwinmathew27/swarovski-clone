// header sticky-------
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

// nav code----------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

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
// search ----------------------
const searchBar = document.getElementById("searchBar");

const productCards = document.querySelectorAll(".product-card");
searchBar.addEventListener("input", searchProducts);

function searchProducts() {
  const searchQuery = searchBar.value.toLowerCase();
  let visibleCardCount = 0;

  productCards.forEach((card) => {
    const productName = card
      .querySelector(".product-brand")
      .textContent.toLowerCase();

    if (productName.includes(searchQuery)) {
      card.style.display = "block";
      visibleCardCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Show empty text. if no visible cards
  const emptyText = document.getElementById("empty-text");
  if (visibleCardCount === 0) {
    emptyText.style.display = "block";
  } else {
    emptyText.style.display = "none";
  }

  // button vilibility
  if (visibleCardCount <= 4) {
    preBtn.forEach((btn) => (btn.style.display = "none"));
    nxtBtn.forEach((btn) => (btn.style.display = "none"));
  } else {
    preBtn.forEach((btn) => (btn.style.display = "block"));
    nxtBtn.forEach((btn) => (btn.style.display = "block"));
  }
}
