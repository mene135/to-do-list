export const addProjectBtn = document.querySelector(".projectSection-addProjectButton");

export function projectSectionFormMaker() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    const addBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const formBtnContainer = document.createElement("form");

    input.setAttribute("placeholder", "Project Name");

    form.classList.add("addProjectForm");
    input.classList.add("addProjectForm-input");
    formBtnContainer.classList.add("addProjectForm-buttonContainer");
    addBtn.classList.add("addButton");
    deleteBtn.classList.add("deleteButton");

    addBtn.textContent = "ADD";
    deleteBtn.textContent = "DELETE";

    formBtnContainer.appendChild(addBtn);
    formBtnContainer.appendChild(deleteBtn);
    form.appendChild(input);
    form.appendChild(formBtnContainer);

    const projectSection = document.querySelector(".projectSection");
    projectSection.insertBefore(form, addProjectBtn);
}

class Project {
    constructor(name, arr) {
        this.name = name;
        this.arr = arr;
    } 
}