const toggleThemeBtn = document.querySelector(".themeToggle");
const body = document.querySelector("body");

toggleThemeBtn.addEventListener("click", () => {
    
    body.classList.toggle("darkTheme");

    
})

const menuToggleBtn = document.querySelector(".menuToggle");

menuToggleBtn.addEventListener("click", () => {
    const nav = document.querySelector(".l-mainNav");
    console.log("hi i am menelaos");

    nav.classList.toggle("nav-hidden");
})