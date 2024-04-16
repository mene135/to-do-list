import { projectMaker } from "./projectHandler";
import { taskMaker } from "./tasksHandler";
import { differenceInMilliseconds, millisecondsToHours, isSameWeek } from "date-fns";


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
const homeBtnAllTasksArr = [];
const importantArr = [];
const todayArr = [];
const weekArr = [];

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
    let currActiveTab = document.querySelector(".is-active");

    if(currActiveTab == null) return;

    if(currActiveTab.classList.contains("homeBtn")) {
        if(currActiveTab.classList.contains("homeBtn-allTasks")) {
            manageAllTasks();
            homeBtnAllTasksArr.forEach(task => {
                taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
            }) 
        } else if(currActiveTab.classList.contains("homeBtn-important")) {
            manageImportant();
            importantArr.forEach(task => {
                taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
            })
        } else if(currActiveTab.classList.contains("homeBtn-today")) {
            manageToday();
            todayArr.forEach(task => {
                taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
        })
        } else if(currActiveTab.classList.contains("homeBtn-thisWeek")) {
            manageWeek();
            weekArr.forEach(task => {
                taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
            })
        }
    }

    if(currActiveTab.classList.contains("project-btn")) {
       let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");

        if(projectsArr[currActiveProjectIndex].tabTasks.length === 0) return;

        projectsArr[currActiveProjectIndex].tabTasks.forEach(task => {
            taskMaker(task.title, task.details, task.date, task.important, task.checked, task.index);
    }) 
    }; 
};  



export function assignTaskIndex() {
    let count = 0;
    let found = false;
    let currActiveProjectIndex = parseInt(document.querySelector(".is-active").getAttribute("data-project-index"));
    

    for(let i = 0; i < projectsArr.length; i++) {
        if(i === currActiveProjectIndex) {
            let localIndex = 0;
            while(found === false) {
                if(projectsArr[i].tabTasks[localIndex] === undefined) {
                    found = true;
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
};

export function updateProject() {
    let active = document.querySelector(".is-active");
    active.click();
};

export function manageAllTasks() {
    while(homeBtnAllTasksArr.length != 0) {
        homeBtnAllTasksArr.pop();
    }

    for(let i = 0; i < projectsArr.length; i++) {
        for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
            homeBtnAllTasksArr.push(projectsArr[i].tabTasks[j]);
        }
    }
};

export function manageImportant() {
    while(importantArr.length != 0) {
        importantArr.pop();
    }

    for(let i = 0; i < projectsArr.length; i++) {
        for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
            if(projectsArr[i].tabTasks[j].important === true ) {
                importantArr.push(projectsArr[i].tabTasks[j]);
            }
        }
    }
}

 function manageToday() {
    while(todayArr.length != 0) {
        todayArr.pop();
    }

    let today = new Date();
    let newDay = today.getDate();
    let newMonth = today.getMonth();
    let newYear = today.getFullYear();

    today = new Date(newYear, newMonth, newDay)
    
    for(let i = 0; i < projectsArr.length; i++) {
        for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
            let taskDate = projectsArr[i].tabTasks[j].date;
            let difference = millisecondsToHours(differenceInMilliseconds(taskDate, today));

           if(difference < 24 && difference >= 0 ) {
                todayArr.push(projectsArr[i].tabTasks[j]);
           }
        }
    }
}

function manageWeek() {
    while(weekArr.length != 0) {
        weekArr.pop();
    }

    let today = new Date();

    for(let i = 0; i < projectsArr.length; i++) {
        for(let j = 0; j < projectsArr[i].tabTasks.length; j++) {
            let taskDate = projectsArr[i].tabTasks[j].date;
            if(isSameWeek(taskDate, today, {weekStartsOn: 1}) === true) {
                weekArr.push(projectsArr[i].tabTasks[j]);
            }
        }
    }
}