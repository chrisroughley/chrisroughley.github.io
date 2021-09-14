const navBar = document.getElementById("nav");
const mobileMenu = document.getElementById("mobile-nav");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const form = document.forms[0];
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

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
  if (window.innerWidth >= 800) {
    hamburger.style.display = "none";
    cross.style.display = "none";
  }
};

window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth >= 800) {
      hamburger.style.display = "none";
      cross.style.display = "none";
      navBar.style.height = "80px";
      isOpen = false;
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
  isOpen = false;
  mobileMenu.style.visibility = "hidden";
  navBar.style.height = "80px";
  hamburger.style.display = "block";
  cross.style.display = "none";
};

const handleSubmit = function (e) {
  const _data = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  fetch("https://portfolio-email-api-app.herokuapp.com/", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(name.value);
  name.value = "";
  e.preventDefault();
};

form.addEventListener("submit", handleSubmit);
