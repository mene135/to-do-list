const tasksContainer = document.querySelector(".tasksContainer");
export let tabs = document.querySelectorAll(".tab");

 export function createTabContent(tabClicked) {
    const div = document.createElement("div");
    div.classList.add("title");

    const h3 = document.createElement("h3");
    h3.textContent = tabClicked;
    h3.classList.add("title-heading");

    div.appendChild(h3);
    tasksContainer.appendChild(div);
};

export function clear() {
    tasksContainer.innerHTML = "";
};

export function manageActiveTab(tabClicked) {
    tabs = document.querySelectorAll(".tab");
    let currActiveTab = document.querySelector(".is-active");

    if(currActiveTab !== tabClicked) {
        tabs.forEach(tab => {
            if(tabClicked === tab) {
               console.log("helloooooo");
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
    createTabContent(tab.childNodes[1].textContent);
}