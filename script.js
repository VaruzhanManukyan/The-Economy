function openBar() {
    let maxWidth = window.innerWidth;
    let bar = document.querySelector(".bar");

    if (maxWidth <= 500) {
        let btnManu = document.querySelector(".btn-block");
        btnManu.style.display = "none";
        bar.style.animation = "phoneiWidthBar 1s";
    }
    else if (maxWidth <= 700) {
        let btnManu = document.querySelector(".btn-block");
        btnManu.style.display = "none";
        bar.style.animation = "miniWidthBar 1s";
    }
    else {
        bar.style.animation = "widthBar 1s";
    }

    bar.style.display = "block"

    let barBackground = document.createElement("div");
    barBackground.className = "bar-backround";
    document.body.appendChild(barBackground);
}

function closeBar() {
    let maxWidth = window.innerWidth;
    let bar = document.querySelector(".bar");

    if (maxWidth <= 500) {
        let btnManu = document.querySelector(".btn-block");
        setTimeout(() => btnManu.style.display = "block", 950);
        bar.style.animation = "phoneWidthClose 1s";
    }
    if (maxWidth <= 700) {
        let btnManu = document.querySelector(".btn-block");
        setTimeout(() => btnManu.style.display = "block", 950);
        bar.style.animation = "miniWidthClose 1s";
    }
    else {
        bar.style.animation = "widthClose 1s";
    }

    setTimeout(() => bar.style.display = "none", 950);
    setTimeout(() => document.querySelector(".bar-backround").remove(), 950);
}

const nav = document.querySelector("nav");
let scroll = window.pageYOffset;

window.addEventListener("scroll", () => {
    if (scroll < window.pageYOffset) {
        nav.classList.add("nav-hidden");
    }else{
        nav.classList.remove("nav-hidden");
    }

    scroll = window.pageYOffset;
})