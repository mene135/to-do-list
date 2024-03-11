export const addProjectBtn = document.querySelector(".projectSection-addProjectButton");
const projectSectionContent = document.querySelector(".projectSection-content");

export function projectSectionFormMaker() {

    const form = document.createElement("form");
    const input = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const formBtnContainer = document.createElement("form");

    input.setAttribute("placeholder", "Project Name");
    input.setAttribute("maxlength", "20");

    form.classList.add("addProjectForm");
    input.classList.add("addProjectForm-input");
    formBtnContainer.classList.add("addProjectForm-buttonContainer");
    addBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    addBtn.textContent = "ADD";
    cancelBtn.textContent = "Cancel";

    form.style.display = "none";

    formBtnContainer.appendChild(addBtn);
    formBtnContainer.appendChild(cancelBtn);
    form.appendChild(input);
    form.appendChild(formBtnContainer);

    projectSectionContent.insertBefore(form, addProjectBtn);

    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            addBtn.click(); 
        }

        if(e.key === "Escape") {
            cancelBtn.click();
        }
    })

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(input.value === "") {
            alert("The field cannot be empty");
            return;
        };
        projectSectionProjectMaker(input.value, form);
        form.style.display = "none";
        input.value = "";
    });

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.style.display = "none";
    })
}

export function projectSectionFormOpen() {
    const form = document.querySelector(".addProjectForm");
    form.style.display = "block";
};


export function projectSectionProjectMaker(name, form) {
    name = name.charAt(0).toUpperCase() + name.slice(1, );

    const project = document.createElement("button");
    const icon = document.createElement("i");
    const projectName = document.createElement("span");
    const optionsBtn = document.createElement("button");
    const optionsIcon = document.createElement("i");

    project.classList.add("project");
    icon.classList.add("fa-solid", "fa-bars");
    projectName.classList.add("projectName");
    optionsBtn.classList.add("options");
    optionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "optionsIcon");

    optionsBtn.setAttribute("tabIndex", "0");

    projectName.textContent = name;

    optionsBtn.appendChild(optionsIcon);
    project.appendChild(icon);
    project.appendChild(projectName);
    project.appendChild(optionsBtn);
    projectSectionContent.insertBefore(project, form);

   
} 

