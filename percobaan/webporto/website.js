let header = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");

function ubahWarnaHeader(){
    if (window.scrollY > 0){
         header.style.backgroundColor = "#535d77ff";
    header.style.borderBottom = "none";

    title.style.color = "white";
    menu.forEach(function(item){
        item.style.color = "white";
    });

    
    }else{
        header.style.backgroundColor = "transparent";
        header.style.borderBottom = "1px solid rgba(141, 141, 141, 1)";

         title.style.color = "black";
    menu.forEach(function(item){
        item.style.color = "black";
    });
   
}
}
window.addEventListener("scroll", ubahWarnaHeader);

let floatingbutton = document.getElementById("floating-button");

function showOrHideFloatingbutton(){
    if(window.scrollY > 0){
        floatingbutton.style.display = "flex";
    }else{
        floatingbutton.style.display = "none";
     
    }
}
window.addEventListener("scroll",showOrHideFloatingbutton);

function scrollOnTop(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}
floatingbutton.onclick = scrollOnTop

let aboutlink = document.querySelector('.menu ul li a[href="#about"]');
let herolink = document.querySelector('.menu ul li a[href="#hero"]');
let skilllink = document.querySelector('.menu ul li a[href="#skill"]');
let workslink = document.querySelector('.menu ul li a[href="#works"]');

let aboutsection = document.getElementById("about");
let herosection = document.getElementById("hero");
let skillsection = document.getElementById("skill");
let workssection = document.getElementById("works");

function scrollToAbout(event){
    event.preventDefault();
    aboutsection.scrollIntoView({behavior: "smooth"});
}

function scrollTohero(event){
    event.preventDefault();
    herosection.scrollIntoView({behavior: "smooth"});
}
function scrollToskill(event){
    event.preventDefault();
    skillsection.scrollIntoView({behavior: "smooth"});
}
function scrollToworks(event){
    event.preventDefault();
    workssection.scrollIntoView({behavior: "smooth"});
}
aboutlink.onclick = scrollToAbout
herolink.onclick = scrollTohero
skilllink.onclick = scrollToskill
workslink.onclick = scrollToworks


let mediaScreen = window.matchMedia("(max-width : 768px)");
function handieScreenCange(e){
    if(e.matches){
        menuBars.addEventListener("click",function(){
            sideBarsResponsive.style.display = "block"
            menuBars.atyle.display = "none"
        });
        closeSidebar.addEventListener("click",function(){
            sideBarsResponsive.style.display = "none"
            menuBars.atyle.display = "block"
        });
    }else {
        sideBarsResponsive.style.display = " none";
        menuBars.style.display = "none";
    }
}

mediaScreen.addEventListener("change",hadleScreenChange);
hadleScreenChange(mediaScreen);


