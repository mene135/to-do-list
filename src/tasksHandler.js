import { projectsArr, setTasks, assignTaskIndex2, sortTaskIndex, updateProject,  } from "./localStorageAndState";

const displayTab = document.querySelector(".displayTab");

export function taskFormMaker() {
    const taskMakerForm = document.createElement("form");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const detailsLabel = document.createElement("label");
    const detailsTextArea = document.createElement("textArea");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    
    titleLabel.textContent = "Title:"
    detailsLabel.textContent = "Details(optional):"
    dateLabel.textContent = "Date due:"

    titleInput.classList.add("taskForm-input", "taskForm-title");
    detailsTextArea.classList.add("taskForm-textArea", "taskForm-details");
    dateInput.classList.add("taskForm-input", "taskForm-date");

    titleInput.setAttribute("type", "text");
    dateInput.setAttribute("type", "date");

    titleInput.setAttribute("required", "");
    dateInput.setAttribute("required", "");

    detailsTextArea.setAttribute("rows", "3");

    titleInput.setAttribute("placeHolder", "What to do?");
    detailsTextArea.setAttribute("placeHolder", "e.g: How will i do it");

    titleLabel.appendChild(titleInput);
    detailsLabel.appendChild(detailsTextArea);
    dateLabel.appendChild(dateInput);

    const projectFormBtnContainer = document.createElement("div");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    addBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";

    projectFormBtnContainer.appendChild(addBtn);
    projectFormBtnContainer.appendChild(cancelBtn);
    
    projectFormBtnContainer.classList.add("buttonContainer");

    taskMakerForm.classList.add("displayTab-taskMakerForm", "is-hidden");

    taskMakerForm.appendChild(titleLabel);
    taskMakerForm.appendChild(detailsLabel);
    taskMakerForm.appendChild(dateLabel);
    taskMakerForm.appendChild(projectFormBtnContainer);

    displayTab.insertBefore(taskMakerForm, document.querySelector(".displayTab-addTaskBtn"));

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let title = titleInput.value;
        let details = detailsTextArea.value;
        let date = dateInput.value;
        let taskIndex = assignTaskIndex2();

        if(title === "") {
            alert("You must fill out the Title field");
            return;
        }

        if(date === "") {
            date = "No due date";
        }

        cancelBtn.click();

        let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");

        let newTask = new Task(title, details, date, false, false, taskIndex);
        projectsArr[currActiveProjectIndex].tabTasks.push(newTask);
        taskMaker(title, details, date, false, false, taskIndex);
        
    })

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskMakerForm.classList.toggle("is-hidden");
    });
};

export function addTaskBtnMaker() {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.classList.add("displayTab-addTaskBtn");
    displayTab.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
        let form = document.querySelector(".displayTab-taskMakerForm");

        if(form.classList.contains("is-hidden") === false) {
            alert("Finish the form you started");
            return;
        }

        form.classList.toggle("is-hidden"); 
    });
}; 

export class Task {
    constructor(title, details, date, important, checked, index) {
        this.title = title;
        this.details = details;
        this.date = date; 
        this.important = important;
        this.checked = checked;
        this.index = index;
    }
}

export function taskMaker(title, details, date, imortant, checked, index) {
    const taskContainer = document.querySelector(".displayTab-tasksContainer");
    const task = document.createElement("li");

    task.classList.add("task");

    const checkedCircleBtn = document.createElement("button");
    const checkedCircleOutline = document.createElement("i");
    const checkedCircleGreenCheck = document.createElement("i");

    checkedCircleBtn.classList.add("task-checkedCircleBtn");
    checkedCircleOutline.classList.add("fa-regular", "fa-circle");
    checkedCircleGreenCheck.classList.add("fa-solid", "fa-circle-check");

    checkedCircleOutline.style.color = "var(--primary)";

    checkedCircleGreenCheck.style.display = "none";
    checkedCircleGreenCheck.style.color = "var(--secondary)";

    checkedCircleBtn.appendChild(checkedCircleOutline);
    checkedCircleBtn.appendChild(checkedCircleGreenCheck);
    task.appendChild(checkedCircleBtn);

    task.setAttribute("data-task-index", `${index}`);

    const taskText = document.createElement("div");
    const taskTitle = document.createElement("h4");
    const taskDetails = document.createElement("p");
    const taskDate = document.createElement("div");

    taskText.classList.add("taskText");
    taskTitle.classList.add("task-title");
    taskDetails.classList.add("task-details");
    taskDate.classList.add("task-date");

    taskTitle.textContent = `${title}`;
    
    if(details !== "") {
        taskDetails.textContent = `${details}`;
    }

    taskDate.textContent = `${date}`;

    taskText.appendChild(taskTitle);
    taskText.appendChild(taskDetails);
    task.appendChild(taskText);
    task.appendChild(taskDate);

    const importantStar = document.createElement("button");
    const emptyStar = document.createElement("i");
    const yellowStar = document.createElement("i")

    importantStar.classList.add("task-important");

    emptyStar.classList.add("fa-regular", "fa-star", "emptyStar");
    yellowStar.classList.add("fa-solid", "fa-star", "yellowStar");


    emptyStar.style.color = "var(--primary)";
    yellowStar.style.color = "#f1bf13";
    yellowStar.style.display = "none"; 

    importantStar.appendChild(emptyStar);
    importantStar.appendChild(yellowStar);

    task.appendChild(importantStar);

    const taskOptionsBtn = document.createElement("button");
    const taskOptionsIcon = document.createElement("i");

    taskOptionsBtn.classList.add("taskOptionsBtn");
    taskOptionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical");

    taskOptionsBtn.appendChild(taskOptionsIcon);
    task.appendChild(taskOptionsBtn);

    const taskOptionsContainer = document.createElement("ul");
    const taskOptionModify = document.createElement("li");
    const taskOptionDelete = document.createElement("li");
    const taskOptionModifyBtn = document.createElement("button");
    const taskOptionDeleteBtn = document.createElement("button");

    taskOptionsContainer.classList.add("task-optionsContainer", "task-optionsContainer-isHidden");

    taskOptionModifyBtn.textContent = "MODIFY";
    taskOptionDeleteBtn.textContent = "DELETE";

    taskOptionModifyBtn.classList.add("taskOptions-modifyBtn");
    taskOptionDeleteBtn.classList.add("taskOptions-deleteBtn");

    taskOptionModify.appendChild(taskOptionModifyBtn);
    taskOptionDelete.appendChild(taskOptionDeleteBtn);


    taskOptionsContainer.appendChild(taskOptionModify);
    taskOptionsContainer.appendChild(taskOptionDelete);

    taskOptionsBtn.appendChild(taskOptionsContainer);

    checkedCircleBtn.addEventListener("click", () => {
        if(checkedCircleOutline.style.display === "none") {
            checkedCircleOutline.style.display = "inline";
            checkedCircleGreenCheck.style.display = "none";
        } else {
            checkedCircleOutline.style.display = "none";
            checkedCircleGreenCheck.style.display = "inline";
        }
    });

    importantStar.addEventListener("click", () => {
        if(emptyStar.style.display === "none") {
            emptyStar.style.display = "inline";
            yellowStar.style.display = "none";
        } else {
            emptyStar.style.display = "none";
            yellowStar.style.display = "inline";
        }
    });

    taskOptionsBtn.addEventListener("click", () => {
        taskOptionsContainer.classList.toggle("task-optionsContainer-isHidden");
    });

    taskOptionsBtn.addEventListener("blur", () => {
        const clickHandler = (e) => {
            if(taskOptionsContainer.classList.contains("task-optionsContainer-isHidden")) return;
            if(taskOptionModifyBtn !== e.target || taskOptionDeleteBtn !== e.target) {
                taskOptionsContainer.classList.add("task-optionsContainer-isHidden");
                document.removeEventListener("click", clickHandler);
            }
        }

        document.addEventListener("click", clickHandler);
    })

    taskOptionDeleteBtn.addEventListener("click", () => {
        let taskIndex = parseInt(task.getAttribute("data-task-index"));
        let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");
        for(let i = 0; i < projectsArr[currActiveProjectIndex].tabTasks.length; i++) {
            if(projectsArr[currActiveProjectIndex].tabTasks[i].index == taskIndex);
            projectsArr[currActiveProjectIndex].tabTasks.splice(i, 1);
            i = projectsArr[currActiveProjectIndex].tabTasks.length + 1;
        }
        taskContainer.removeChild(task);
        sortTaskIndex(index);
        updateProject();
    });

    taskOptionModify.addEventListener("click", () => {
        taskModifyForm(task);
    });

    taskContainer.appendChild(task); 

}
 
function taskModifyForm(task) {
    task.style.display = "none";
    const taskMakerForm = document.createElement("form");
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const detailsLabel = document.createElement("label");
    const detailsTextArea = document.createElement("textArea");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    
    titleLabel.textContent = "Title:"
    detailsLabel.textContent = "Details(optional):"
    dateLabel.textContent = "Date due:"

    titleInput.classList.add("taskForm-input", "taskForm-title");
    detailsTextArea.classList.add("taskForm-textArea", "taskForm-details");
    dateInput.classList.add("taskForm-input", "taskForm-date");

    titleInput.value = task.querySelector(".task-title").textContent;
    detailsTextArea.value = task.querySelector(".task-details").textContent;
    dateInput.value = task.querySelector(".task-date").textContent;

    titleInput.setAttribute("type", "text");
    dateInput.setAttribute("type", "date");

    titleInput.setAttribute("required", "");
    dateInput.setAttribute("required", "");

    detailsTextArea.setAttribute("rows", "3");

    titleInput.setAttribute("placeHolder", "What to do?");
    detailsTextArea.setAttribute("placeHolder", "e.g: How will i do it");

    titleLabel.appendChild(titleInput);
    detailsLabel.appendChild(detailsTextArea);
    dateLabel.appendChild(dateInput);

    const projectFormBtnContainer = document.createElement("div");
    const modifyBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    modifyBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    modifyBtn.textContent = "Modify";
    cancelBtn.textContent = "Cancel";

    projectFormBtnContainer.appendChild(modifyBtn);
    projectFormBtnContainer.appendChild(cancelBtn);
    
    projectFormBtnContainer.classList.add("buttonContainer");

    taskMakerForm.classList.add("displayTab-taskMakerForm") ;

    taskMakerForm.appendChild(titleLabel);
    taskMakerForm.appendChild(detailsLabel);
    taskMakerForm.appendChild(dateLabel);
    taskMakerForm.appendChild(projectFormBtnContainer);

    let taskContainer = document.querySelector(".displayTab-tasksContainer");
    console.log("modify work")

    taskContainer.insertBefore(taskMakerForm, task);

    modifyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let title = titleInput.value;
        let details =  detailsTextArea.value;
        let date = dateInput.value;
        if(date === "") {
            date = "No due date";
        }

        let taskIndex = parseFloat(task.getAttribute("data-task-index"));

        let currActiveProjectIndex = document.querySelector(".is-active").getAttribute("data-project-index");
        projectsArr[currActiveProjectIndex].tabTasks.forEach(task => {
            if(task.index === taskIndex)  {
                task.title = title;
                task.details = details;
                task.date = date;
            }
        });

        

        cancelBtn.click();
        document.querySelector(".is-active").click();
        task.style.display = "block";
    })

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskMakerForm.classList.toggle("is-hidden");
    });
}