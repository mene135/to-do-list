export const toggleThemeBtn = document.querySelector(".themeToggle");
console.log(toggleThemeBtn);

 export function toggleTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("darkTheme");
}