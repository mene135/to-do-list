import { toggleThemeBtn, toggleTheme, setThemeLocalStorage, applyThemeLocalStorage } from "./themes/themeToggle";
import { menuToggleBtn, menuToggle, isNavExpanded } from "./menuToggle";
import { tabs, tabsEventHandler} from "./tabFunctionalities";
import { addProjectBtn, projectFormMaker, projectFormOpener } from "./projectHandler";
import { applyProjectsLocalStorage, setProjectsLocalStorage, projectsArr } from "./localStorageAndState";



toggleThemeBtn.addEventListener("click", toggleTheme);
menuToggleBtn.addEventListener("click", menuToggle);
addProjectBtn.addEventListener("click", () => {
    if(document.querySelector(".projectMakerForm").style.display === "block") {
        alert("You must finish the previous form");
        document.querySelector(".projectMakerForm-input").focus();
        return;
}
    projectFormOpener();
    document.querySelector(".projectMakerForm-input").focus();
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
    tabsEventHandler(tab);
    })
});

window.onload = () => {
    applyThemeLocalStorage();
    applyProjectsLocalStorage();
    isNavExpanded();
    projectFormMaker();
    
    document.querySelector(".homeBtn").click();

    console.log(projectsArr)
};

window.addEventListener("beforeunload", () => {
    setThemeLocalStorage();
    setProjectsLocalStorage();
}); 

