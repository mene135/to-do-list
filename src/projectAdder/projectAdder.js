import { clearActive } from "../tabs/tabFunctionalities";

export const addProjectBtn = document.querySelector(".projectSection-addProjectButton");
const projectSectionContent = document.querySelector(".projectSection-content");

const projects = [];

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

    const optionsList = document.createElement("ul");
    const modifyOption = document.createElement("li");
    const deleteOption = document.createElement("li")
    const modifyOptionBtn = document.createElement("button");
    const deleteOptionBtn = document.createElement("button");


    modifyOptionBtn.textContent = "MODIFY";
    deleteOptionBtn.textContent = "DELETE";

    optionsList.classList.add("optionsList");
    modifyOptionBtn.classList.add("options-modifyOptionBtn");
    optionsList.classList.toggle("hidden");

    
    modifyOption.appendChild(modifyOptionBtn);
    deleteOption.appendChild(deleteOptionBtn);
    
    optionsList.appendChild(modifyOption);
    optionsList.appendChild(deleteOption);
    project.appendChild(optionsList);

   project.addEventListener("click", () => {
    activeProjects(project);
    clearActive("none");
   })


   optionsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        optionsList.classList.toggle("hidden");     
   })

   optionsBtn.addEventListener("blur", () => {
        const clickHandler = (e) => {
            if(optionsList.classList.contains("hidden")) return;
            if(modifyOptionBtn !== e.target || deleteOptionBtn !== e.target) {
                optionsList.classList.toggle("hidden");
                document.removeEventListener("click", clickHandler);
            }
        }

        document.addEventListener("click", clickHandler);
   })

   modifyOptionBtn.addEventListener("click", () => {
        const modifyInput = document.createElement("input");
        modifyInput.classList.add("project-modifyInput");
        modifyInput.value = projectName.textContent;

        projectName.style.display = "none";

        project.insertBefore(modifyInput, optionsBtn);
        modifyInput.focus();
   })
}

export function activeProjects(projectClicked) {
    const projects = document.querySelectorAll(".project");

    console.log("active projects clicked");
    projects.forEach(project => {
        if(project !== projectClicked) {
            project.classList.remove("active");
        } else {
            project.classList.add("active");
        }})
}









