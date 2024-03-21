export const toggleThemeBtn = document.querySelector(".themeToggle");

const body = document.querySelector("body");

export function toggleTheme() {
    body.classList.toggle("darkTheme");
};

export function setThemeLocalStorage() {
    if(body.classList.contains("darkTheme")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light");
    }
}

export function applyThemeLocalStorage() {
    const theme = localStorage.getItem("theme");

    if(theme === "dark") {
        body.classList.add("darkTheme") 
    } else {
        body.classList.remove("darkTheme");
    }
}