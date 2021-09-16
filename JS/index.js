const navBar = document.getElementById("nav");
const mobileMenu = document.getElementById("mobile-nav");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross");
const form = document.forms[0];
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

let isOpen = false;
let hasSent = false;

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
  e.preventDefault();
  if (!hasSent) {
    fetch("https://portfolio-email-api-app.herokuapp.com/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(_data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    submit.style.backgroundColor = "#376e37";
    submit.textContent = "Success!";
    name.value = "";
    email.value = "";
    message.value = "";
    hasSent = true;
  } else {
    window.alert(
      "I've already received you're email. Want to send another? Give the page a quick refresh."
    );
  }
};

form.addEventListener("submit", handleSubmit);
