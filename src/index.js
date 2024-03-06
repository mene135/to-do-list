const toggleThemeBtn = document.querySelector(".themeToggle");
const body = document.querySelector("body");

toggleThemeBtn.addEventListener("click", () => {
    
    body.classList.toggle("darkTheme");

    
})

const menuToggleBtn = document.querySelector(".menuToggle");

menuToggleBtn.addEventListener("click", () => {
    const nav = document.querySelector(".l-mainNav");
    console.log("hi i am menelaos");

    if(document.documentElement.clientWidth <= 425) {
        nav.classList.toggle("nav-expanded");
        nav.classList.remove("nav-hidden");

        isNavExpanded();
    };


    if(document.documentElement.clientWidth > 425) {
        nav.classList.toggle("nav-hidden"); 
        nav.classList.remove("nav-expanded");

        isNavExpanded();
    }
})

function isNavExpanded() {
    const nav = document.querySelector(".l-mainNav");
    
    if (
        nav.classList.contains("nav-expanded") ||
        nav.classList.contains("nav-hidden") === false && document.documentElement.clientWidth > 425
    ) {
        menuToggleBtn.setAttribute("aria-expanded", "true");
    } else {
        menuToggleBtn.setAttribute("aria-expanded", "false");
    }
}

window.onload = () => {
    isNavExpanded();
}