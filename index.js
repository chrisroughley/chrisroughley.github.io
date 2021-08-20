navBar = document.getElementById("nav");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 400) {
    navBar.className = "nav-bar show";
  } else {
    navBar.className = "nav-bar hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
