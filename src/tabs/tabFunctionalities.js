const main = document.querySelector("main");
const tabs = document.querySelectorAll(".tab");

 export function createTabContent(tabClicked) {
    const div = document.createElement("div");
    div.classList.add("title");

    const h3 = document.createElement("h3");
    h3.textContent = tabClicked;
    h3.classList.add("title-heading");

    div.appendChild(h3);
    main.appendChild(div);
}

export function clear() {
    main.innerHTML = "";
}

export function clearActive(tabClicked) {
    tabs.forEach(tab => {
        if(tabClicked !== tab) {
            tab.classList.remove("active")
        } else {
            tab.classList.add("active");
        }
    })
}

