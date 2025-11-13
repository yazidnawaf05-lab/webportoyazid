let header = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");

function ubahWarnaHeader() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#4070f4";
    header.style.borderBottom = "none";

    title.style.color = "white";
    menu.forEach(function (item) {
      item.style.color = "white";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.borderBottom = "1px solid rgb(237, 236, 236)";

    title.style.color = "black";
    menu.forEach(function (item) {
      item.style.color = "black";
    });
  }
}
window.addEventListener("scroll", ubahWarnaHeader);

let floatingbutton = document.getElementById("floating-button");

function showOrHideFloatingbutton() {
  if (window.scrollY > 0) {
    floatingbutton.style.display = "flex";
  } else {
    floatingbutton.style.display = "none";
  }
}
window.addEventListener("scroll", showOrHideFloatingbutton);

function scrollOnTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
floatingbutton.onclick = scrollOnTop;

let aboutlink = document.querySelector('.menu ul li a[href="#about"]');
let herolink = document.querySelector('.menu ul li a[href="#hero"]');
let skilllink = document.querySelector('.menu ul li a[href="#skill"]');
let workslink = document.querySelector('.menu ul li a[href="#works"]');
let kotaklink = document.querySelector('.menu ul li a[href="#kotak"]');

let aboutsection = document.getElementById("about");
let herosection = document.getElementById("hero");
let skillsection = document.getElementById("skill");
let workssection = document.getElementById("works");
let kotaksection = document.getElementById("kotak");

function scrollToAbout(event) {
  event.preventDefault();
  aboutsection.scrollIntoView({ behavior: "smooth" });
}

function scrollTohero(event) {
  event.preventDefault();
  herosection.scrollIntoView({ behavior: "smooth" });
}
function scrollToskill(event) {
  event.preventDefault();
  skillsection.scrollIntoView({ behavior: "smooth" });
}
function scrollToworks(event) {
  event.preventDefault();
  workssection.scrollIntoView({ behavior: "smooth" });
}
function scrollTokotak(event) {
  event.preventDefault();
  kotaksection.scrollIntoView({ behavior: "smooth" });
}
aboutlink.onclick = scrollToAbout;
herolink.onclick = scrollTohero;
skilllink.onclick = scrollToskill;
workslink.onclick = scrollToworks;
kotaklink.onclick = scrollTokotak;

let menuBars = document.getElementById("menu-bars");
let sidebarResponsive = document.getElementById("sidebar-responsive");
let closeSidebarButton = document.getElementById("close-sidebar");

let resolusiscreen = window.matchMedia("(max-width: 780px)");

function responsivescreen(screen) {
  if (screen.matches) {
    menuBars.style.display = "block";
    menuBars.addEventListener("click", function () {
      sidebarResponsive.style.display = "block";
      menuBars.style.display = "none";
    });
    closeSidebarButton.addEventListener("click", function () {
      sidebarResponsive.style.display = "none";
      menuBars.style.display = "block";
    });
  } else {
    sidebarResponsive.style.display = "none";
    menuBars.style.display = "none";
  }
}
responsivescreen(resolusiscreen);
resolusiscreen.addEventListener("change", responsivescreen);
