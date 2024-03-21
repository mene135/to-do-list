import { projectSectionProjectMaker } from "./projectHandler";

export function findEmptyDataTabIndex() {
    const indexes = document.querySelectorAll("[data-project-index]");
    let foundEmptyIndex = false;
    let count = 0;

    while(foundEmptyIndex === false) {
        if(indexes[count] === undefined) {
            foundEmptyIndex = true;
        } else {
            count++;
        }
    }

    return count;
}

export const projectsArr = [];

export function sortProjectsDataAttributes() {
    console.log("hello gusy")
    let projects = document.querySelectorAll("[data-project-index]");
    console.log(projects);
    let count = 0;

    projects.forEach(project => {
        console.log("it does not work");

        project.setAttribute("data-project-index", `${count}`);
        count++;
    })
};

export function modifyProjectDataName(newName, index) {
    projectsArr[index].tabName = newName;
    console.log(projectsArr);
}

export function setProjectsLocalStorage() {
    localStorage.setItem("Projects", JSON.stringify(projectsArr));
}

export function applyProjectsLocalStorage() {
    let localStateProjectArr = JSON.parse(localStorage.getItem("Projects"));

    for(let i = 0; i < localStateProjectArr.length; i++) {
        projectsArr.push(localStateProjectArr[i]);
    }

    for(let i = 0; i < projectsArr.length; i++) {
        projectSectionProjectMaker(projectsArr[i].tabName, i)
    }
}