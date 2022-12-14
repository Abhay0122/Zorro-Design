// menu_overlay...

const menu_overlay = document.querySelector("#menu_overlay");
const cross = document.querySelector("#cross");
const menu_icon = document.querySelector("#navbar_left>i");

menu_icon.addEventListener("click", function () {
    menu_overlay.style.transform = "translatey(0)";
})
cross.addEventListener("click", function () {
    menu_overlay.style.transform = "translatey(-100%)";
})

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// input_.mainbox1_props

function call() {

    const box1 = document.querySelector(".box1");
    const box2 = document.querySelector(".box2");
    const box3 = document.querySelector(".box3");
    const box4 = document.querySelector(".box4");
    const box5 = document.querySelector(".box5");
    const box6 = document.querySelector(".box6");
    const box7 = document.querySelector(".box7");
    const box8 = document.querySelector(".box8");
    const box9 = document.querySelector(".box9");
    const box10 = document.querySelector(".box10");
    const box11 = document.querySelector(".box11");
    const box12 = document.querySelector(".box12");
    const box13 = document.querySelector(".box13");
    const box14 = document.querySelector(".box14");

    var flag = 0;
    box1.addEventListener("click", function () {
        if (flag === 0) {
            box1.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box1.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box2.addEventListener("click", function () {
        if (flag === 0) {
            box2.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box2.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box3.addEventListener("click", function () {
        if (flag === 0) {
            box3.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box3.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box4.addEventListener("click", function () {
        if (flag === 0) {
            box4.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box4.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box5.addEventListener("click", function () {
        if (flag === 0) {
            box5.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box5.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box6.addEventListener("click", function () {
        if (flag === 0) {
            box6.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box6.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box7.addEventListener("click", function () {
        if (flag === 0) {
            box7.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box7.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box8.addEventListener("click", function () {
        if (flag === 0) {
            box8.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box8.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box9.addEventListener("click", function () {
        if (flag === 0) {
            box9.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box9.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box10.addEventListener("click", function () {
        if (flag === 0) {
            box10.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box10.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box11.addEventListener("click", function () {
        if (flag === 0) {
            box11.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box11.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box12.addEventListener("click", function () {
        if (flag === 0) {
            box12.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box12.style.backgroundColor = "black"
            flag = 0;
        }
    })
    box13.addEventListener("click", function () {
        if (flag === 0) {
            box13.style.backgroundColor = "#4169e1"
            flag = 1;
        }
        else {
            box13.style.backgroundColor = "black"
            flag = 0;
        }
    })
}

call()

// preloader

var preloader = document.querySelector(".pre_loader");

setTimeout(function webloader() {
    preloader.style.display = 'none';
}, 4000)


// LOCOMOTIVE

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

