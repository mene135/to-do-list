import { projectMaker } from "./projectHandler";
import { taskMaker,Task } from "./tasksHandler";

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
const allTasks = [];

export function sortProjectsDataAttributes() {
    let projects = document.querySelectorAll("[data-project-index]");
    let count = 0;

    projects.forEach(project => {

        project.setAttribute("data-project-index", `${count}`);
        count++;
    })
};


export function modifyProjectDataName(newName, index) {
    projectsArr[index].tabName = newName;
};

export function setProjectsLocalStorage() {
    localStorage.setItem("Projects", JSON.stringify(projectsArr));
};

export function applyProjectsLocalStorage() {
    let localStateProjectArr = JSON.parse(localStorage.getItem("Projects"));

    for(let i = 0; i < localStateProjectArr.length; i++) {
        projectsArr.push(localStateProjectArr[i]);
    }

    for(let i = 0; i < projectsArr.length; i++) {
        projectMaker(projectsArr[i].tabName, i)
    }
};

export function applyTasks() {
    let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");

    if(projectsArr[currActiveProjectIndex].tabTasks.length === 0) return;

    projectsArr[currActiveProjectIndex].tabTasks.forEach(task => {
        taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
    })
};  

export function assignTaskIndex() {
    let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");
    let taskArr = projectsArr[currActiveProjectIndex].tabTasks;

    let count = 0;
    let found = false;
    
    while(found === false) {
        if(taskArr[count] === undefined) {
        found = true;
        return count;
        } else {
            count++;
        }
    }
};

export function assignTaskIndex2() {
    let count = 0;
    let found = false;
    let currActiveProjectIndex = parseInt(document.querySelector(".is-active").getAttribute("data-project-index"));
    

    for(let i = 0; i < projectsArr.length; i++) {
        if(i === currActiveProjectIndex) {
            let localIndex = 0;
            while(found === false) {
                if(projectsArr[i].tabTasks[localIndex] === undefined) {
                    found = true;
                    console.log(count);
                    return count;
                } else {
                    localIndex++;
                    count++;
                }
            }
        } else {
            for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
                count++;
            }; 
        }
    };
};

export function sortTaskIndex(taskRemoved) {
    for(let i = 0; i < projectsArr.length; i++) {
        for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
            if(taskRemoved <= projectsArr[i].tabTasks[j].index) {
                projectsArr[i].tabTasks[j].index =  projectsArr[i].tabTasks[j].index - 1;
            }
        }
    }
}

export function updateProject() {
    let activeProject = document.querySelector(".is-active");
    activeProject.click();
}

