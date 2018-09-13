filterAll();

//Categories of tabs
let all = document.getElementById("all");
let eCommerce = document.getElementById("e-commerce");
let webSite = document.getElementById("web-site");

all.addEventListener("click", filterAll);
eCommerce.addEventListener("click", filterECommerce);
webSite.addEventListener("click", filterWebSite);

//Functions for categories
function clearAllCards() {
  let allCards = document.querySelectorAll(".portfolio_column");
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove("show");
  }
}

function filterAll() {
  let allCards = document.querySelectorAll(".portfolio_column");

  clearAllCards();
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.add("show");
  }
}

function filterECommerce() {
  clearAllCards();
  let allECommerceCards = document.querySelectorAll(".e-commerce");
  for (let i = 0; i < allECommerceCards.length; i++) {
    allECommerceCards[i].classList.add("show");
  }
}

function filterWebSite() {
  clearAllCards();
  let allWebSiteCards = document.querySelectorAll(".web-site");
  for (let i = 0; i < allWebSiteCards.length; i++) {
    allWebSiteCards[i].classList.add("show");
  }
}

let tabs = document.querySelectorAll("#tabsContainer li");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", tabIsActive);
  function tabIsActive() {
    clearTabs();
    tabs[i].classList.add("is-active");
  }
}

function clearTabs() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("is-active");
  }
}
