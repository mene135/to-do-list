import { setTasks } from "./localStorageAndState";

const displayTab = document.querySelector(".displayTab");
export let tabs = document.querySelectorAll(".tab");

 export function createTabContent(tabClicked) {
    const div = document.createElement("div");
    div.classList.add("displayTab-title");

    const h3 = document.createElement("h3");
    h3.textContent = tabClicked;
    h3.classList.add("displayTab-title-heading");

    const tasksContainer = document.createElement("ul");
    tasksContainer.classList.add("displayTab-tasksContainer");


    div.appendChild(h3);
    displayTab.appendChild(div);
    displayTab.appendChild(tasksContainer);
};

export function clear() {
    displayTab.innerHTML = "";
};

export function manageActiveTab(tabClicked) {
    tabs = document.querySelectorAll(".tab");
    let currActiveTab = document.querySelector(".is-active");

    if(currActiveTab !== tabClicked) {
        tabs.forEach(tab => {
            if(tabClicked === tab) {
               tab.classList.add("is-active");
               return;
            };
        });

        if(currActiveTab !== null) {
            currActiveTab.classList.remove("is-active");
        }

    } else {
        return;
    };
};

export function tabsEventHandler(tab, checkForTasks) {
    if(checkForTasks == false) {
    manageActiveTab(tab);
    clear();
    createTabContent(tab.childNodes[1].textContent);
    } else {
        checkIfActiveProject();
        manageActiveTab(tab);
        clear();
        createTabContent(tab.childNodes[1].textContent);
    }
    
};

export class Tab {
    constructor(tabName, tabTasks) {
        this.tabName = tabName;
        this.tabTasks = tabTasks;
    }
};

function checkIfActiveProject() {
    let currActiveTab = document.querySelector(".is-active");
    if(currActiveTab.classList.contains("project-button")) {
        setTasks();
    }
};