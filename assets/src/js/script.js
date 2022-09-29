const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const menuInc = document.querySelector(".menuInc")
const subMenu = document.querySelector(".submenu")


// burger menu

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

//  submenu
function showSubMenu() {
    if (subMenu.classList.contains("open")) {
        subMenu.classList.remove("open");
    } else {
        subMenu.classList.add("open");
    }
    // subMenu.classList.add("open");
}

menuInc.addEventListener("click", showSubMenu);

// hide opened menu

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos != currentScrollPos) {
        subMenu.classList.remove("open");
        hamburger.style.top = "-3rem";
    }
    else {
        subMenu.style.top = "45px";
        hamburger.style.top = "1.5rem";
    }
}

// slider

const swiper = new Swiper('.swiper', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

