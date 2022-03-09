const hamBurger = document.querySelector(".hamBurger i");
const navbar = document.querySelector(".navbar");
const navOpen = document.querySelector(".navOpen");
const navLink = document.querySelectorAll(".navList a");

hamBurger.addEventListener("click", () => {
  if (hamBurger.classList.contains("fa-bars")) {
    hamBurger.classList.remove("fa-bars");
    hamBurger.classList.add("fa-times");
  } else {
    hamBurger.classList.remove("fa-times");
    hamBurger.classList.add("fa-bars");
  }
  navbar.classList.toggle("navOpen");
  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
      hamBurger.classList.remove("fa-times");
      hamBurger.classList.add("fa-bars");
      navbar.classList.remove("navOpen");
    });
  }
});

var prevPos = window.pageXOffset;
window.onscroll = function () {
  var currentPos = window.pageYOffset;
  if (prevPos > currentPos) {
    document.querySelector(".navBar").style.top = "0";
    document.querySelector(".navBar").style.background = "#191921";
    if (currentPos == 0) {
      document.querySelector(".navBar").style.background = "transparent";
    }
  } else {
    document.querySelector(".navBar").style.top = "-600px";
  }

  prevPos = currentPos;
};
