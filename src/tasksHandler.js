import { projectsArr } from "./localStorageAndState";

const tasksContainer = document.querySelector(".tasksContainer");

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
    dateLabel.textContent = "Date:"

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

    const formBtnContainer = document.createElement("div");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");

    addBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    addBtn.textContent = "Add";
    cancelBtn.textContent = "Cancel";

    formBtnContainer.appendChild(addBtn);
    formBtnContainer.appendChild(cancelBtn);
    
    formBtnContainer.classList.add("buttonContainer");

    taskMakerForm.classList.add("tasksContainer-taskMakerForm", "is-hidden");

    taskMakerForm.appendChild(titleLabel);
    taskMakerForm.appendChild(detailsLabel);
    taskMakerForm.appendChild(dateLabel);
    taskMakerForm.appendChild(formBtnContainer);

    tasksContainer.insertBefore(taskMakerForm, document.querySelector(".tasksContainer-addTaskBtn"));

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const title = document.querySelector(".taskForm-title").value;
        const details = document.querySelector(".taskForm-details").value;
        const date = document.querySelector(".taskForm-date").value;

        let newTask = new Task(title, details, date, false, false);

        let currentlyActiveTabIndex = document.querySelector(".is-active").getAttribute("data-project-index");
        projectsArr[currentlyActiveTabIndex].tabTasks.push(newTask);
        console.log(projectsArr);
    })

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskMakerForm.classList.toggle("is-hidden");
    });
};

export function addTaskBtnMaker() {
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add task";
    addTaskBtn.classList.add("tasksContainer-addTaskBtn");
    tasksContainer.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
        let form = document.querySelector(".tasksContainer-taskMakerForm");

        if(form.classList.contains("is-hidden") === false) {
            alert("Finish the form you started");
            return;
        }

        console.log(addTaskBtn);
        console.log(form);
        form.classList.toggle("is-hidden"); 
    });
}; 

class Task {
    constructor(title, details, date, important, checked) {
        this.title = title;
        this.details = details;
        this.date = date; 
        this.important = important;
        this.checked = checked;
    }
}

function taskMaker(title, details, date, imortant, checked) {
    const checkedCircle = document.createElement("button");
    const taskTitle = document.createElement("h4");
    const taskDetails = document.createElement("p");
    const taksDate = document.createElement("div");
    const importantStar = document.createElement("button");
    const taskOptions = document.createElement("button");
}