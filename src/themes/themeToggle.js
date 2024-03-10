export const toggleThemeBtn = document.querySelector(".themeToggle");

export function toggleTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("darkTheme");
}