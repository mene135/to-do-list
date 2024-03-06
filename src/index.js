const toggleThemeBtn = document.querySelector(".themeToggle");
const body = document.querySelector("body");

toggleThemeBtn.addEventListener("click", () => {
    
    body.classList.toggle("darkTheme");

    
})

const menuToggleBtn = document.querySelector(".menuToggle");

menuToggleBtn.addEventListener("click", () => {
    console.log("menu button clicked");

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

class Tab {
    constructor(tabName, tabToDos) {
        this.tabName = tabName;
        this.tabToDos = tabToDos;
    }

    click = () => {
        const main = document.querySelector("main");

        const h3 = document.createElement("h3");
        h3.textContent = this.tabName;

        main.appendChild(h3);
    }

    appendToDo = (toDo) => {
        this.tabToDos.push(toDo);
    }
} 

const tabs = document.querySelectorAll(".tab");
const allTasks = new Tab(tabs[0].childNodes[1].textContent, []);
const today = new Tab(tabs[1].childNodes[1].textContent, []);
const next7Days = new Tab(tabs[2].childNodes[1].textContent, []);
const important = new Tab(tabs[3].childNodes[1].textContent, []);

const homeSectionTabs = [];
homeSectionTabs.push(allTasks);
homeSectionTabs.push(today);
homeSectionTabs.push(next7Days);
homeSectionTabs.push(important);

console.log(next7Days);
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        clearActive(tab)
        clear();
        click(tab.childNodes[1].textContent);
        tab.classList.add("active");

        const nav = document.querySelector(".l-mainNav")

        if(nav.classList.contains("nav-expanded")) {
            menuToggleBtn.click();
        }
    })
})

function click(tabClicked) {
    const main = document.querySelector("main");

    const div = document.createElement("div");
    div.classList.add("title");

    const h3 = document.createElement("h3");
    h3.textContent = tabClicked;
    h3.classList.add("title-heading");

    div.appendChild(h3);
    main.appendChild(div);
}

function clear() {
    const main = document.querySelector("main");

    main.innerHTML = "";
}

function clearActive(tabClicked) {
    tabs.forEach(tab => {
        if(tabClicked !== tab) {
            tab.classList.remove("active")
        }
    })
}



window.onload = () => {

    const tabs = document.querySelectorAll(".tab");

    console.log(tabs[3].childNodes);

    isNavExpanded();
}