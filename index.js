navBar = document.getElementById("nav");
mobileMenu = document.getElementById("mobile-nav");
body = document.body;
hamburger = document.getElementById("hamburger");
cross = document.getElementById("cross");

let isOpen = false;

let myScrollFunc = function () {
  if (!isOpen) {
    let y = window.scrollY;
    if (y >= 400) {
      navBar.className = "nav-bar show";
    } else {
      navBar.className = "nav-bar hide";
    }
  }
};

let windowResize = function () {
  console.log("rezise");
  if (window.innerWidth >= 800) {
    hamburger.style.display = "none";
    cross.style.display = "none";
  }
};

window.addEventListener(
  "resize",
  () => {
    console.log(window.innerWidth);
    if (window.innerWidth >= 800) {
      hamburger.style.display = "none";
      cross.style.display = "none";
      navBar.style.height = "80px";
    } else {
      hamburger.style.display = "block";
    }
  },
  true
);

window.addEventListener("scroll", myScrollFunc);

let showMenu = function () {
  isOpen = true;
  console.log("hello");
  mobileMenu.style.visibility = "visible";
  navBar.style.height = "100vh";
  hamburger.style.display = "none";
  cross.style.display = "block";
};

let closeMenu = function () {
  mobileMenu.style.visibility = "hidden";
  navBar.style.height = "80px";
  hamburger.style.display = "block";
  cross.style.display = "none";
};
