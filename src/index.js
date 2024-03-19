import { toggleThemeBtn, toggleTheme, setTheme, applyTheme } from "./themes/themeToggle";
import { menuToggleBtn, menuToggle, isNavExpanded } from "./navigation/menuToggle";
import { tabs, tabsEventHandler} from "./tabs/tabFunctionalities";
import { addProjectBtn, projectSectionFormMaker, projectSectionFormOpen } from "./projectAdder/projectAdder";



toggleThemeBtn.addEventListener("click", toggleTheme);
menuToggleBtn.addEventListener("click", menuToggle);
addProjectBtn.addEventListener("click", () => {
    if(document.querySelector(".addProjectForm").style.display === "block") {
        alert("You must finish the previous form");
        document.querySelector(".addProjectForm-input").focus();
        return;
}
    projectSectionFormOpen();
    document.querySelector(".addProjectForm-input").focus();
});

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

const allTasks = new Tab(tabs[0].childNodes[1].textContent, []);
const today = new Tab(tabs[1].childNodes[1].textContent, []);
const next7Days = new Tab(tabs[2].childNodes[1].textContent, []);
const important = new Tab(tabs[3].childNodes[1].textContent, []);

const homeSectionTabs = [];
homeSectionTabs.push(allTasks);
homeSectionTabs.push(today);
homeSectionTabs.push(next7Days);
homeSectionTabs.push(important);

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    tabsEventHandler(tab);
    })
});

window.onload = () => {
    applyTheme();
    isNavExpanded();
    projectSectionFormMaker();
}

window.addEventListener("beforeunload", () => {
    setTheme();
})