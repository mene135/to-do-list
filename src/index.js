import { toggleThemeBtn, toggleTheme, setThemeLocalStorage, applyThemeLocalStorage } from "./themes/themeToggle";
import { menuToggleBtn, menuToggle, isNavExpanded } from "./menuToggle";
import { tabs, tabsEventHandler} from "./tabFunctionalities";
import { addProjectBtn, projectSectionFormMaker, projectSectionFormOpen } from "./projectHandler";



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

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    tabsEventHandler(tab);
    })
});

window.onload = () => {
    applyThemeLocalStorage();
    isNavExpanded();
    projectSectionFormMaker();
};

window.addEventListener("beforeunload", () => {
    setThemeLocalStorage();
});

