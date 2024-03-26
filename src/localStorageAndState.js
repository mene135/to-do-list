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

export function sortTaskDataAttributes() {
    let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");
    let countState = 0;
    

    projectsArr[currActiveProjectIndex].tabTasks.forEach(task => {
        task.index = `${countState}`;
        countState++;
    })

    let tasks = document.querySelector(".displayTab-tasksContainercd").childNodes;

    let count = 0;
    tasks.forEach(task => {
        task.setAttribute("data-task-index", `${count}`);
        count++;
    })

}

export function modifyProjectDataName(newName, index) {
    projectsArr[index].tabName = newName;
    console.log(projectsArr);
};

export function setProjectsLocalStorage() {
    console.log("123");
    console.log(projectsArr);
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

export function setTasks() {
    let  tasksContainer = document.querySelector(".displayTab-tasksContainer");
    console.log(tasksContainer.childNodes);
    let tasks = tasksContainer.childNodes;

    let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");
    console.log(projectsArr)
    projectsArr[currActiveProjectIndex].tabTasks = [];

    tasks.forEach(task => {
        let title = task.querySelector(".task-title").textContent;
        let details = task.querySelector(".task-details").textContent;
        let date = task.querySelector(".task-date").textContent;
        let important = task.querySelector(".task-important");
        let checked = task.querySelector(".task-checkedCircleBtn");

        let newTask = new Task(title, details, date, important, checked);
        projectsArr[currActiveProjectIndex].tabTasks.push(newTask);
        console.log(projectsArr)
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
}