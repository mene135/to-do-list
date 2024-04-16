import { setTasks, applyTasks } from "./localStorageAndState";

const displayTab = document.querySelector(".l-displayTab");
export let tabs = document.querySelectorAll(".js-tab");

 export function createTabContent(tab) {
    const div = document.createElement("div");
    div.classList.add("tab-title");

    let text = tab.querySelector("span").textContent;

    console.log(`this ntly active tab ${tab}`);

    const h3 = document.createElement("h3");
    h3.textContent = text;
    h3.classList.add("tab-title-heading");

    const tasksContainer = document.createElement("ul");
    tasksContainer.classList.add("tab-tasksContainer");


    div.appendChild(h3);
    displayTab.appendChild(div);
    displayTab.appendChild(tasksContainer);
};

export function clear() {
    displayTab.innerHTML = "";
};

export function manageActiveTab(tabClicked) {
    tabs = document.querySelectorAll(".js-tab");
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

export function tabsEventHandler(tab) {
    manageActiveTab(tab);
    clear();
    console.log(tab)
    console.log(tab.childNodes);
    createTabContent(tab);
    applyTasks();
};

export class Tab {
    constructor(tabName, tabTasks) {
        this.tabName = tabName;
        this.tabTasks = tabTasks;
    }
};

