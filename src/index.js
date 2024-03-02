console.log("hi");

const toggleThemeBtn = document.querySelector(".themeToggle");
const body = document.querySelector("body");

toggleThemeBtn.addEventListener("click", () => {
    
    body.classList.toggle("darkTheme");

    
})