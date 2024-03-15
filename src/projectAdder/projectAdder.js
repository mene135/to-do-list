import { manageActiveTab } from "../tabs/tabFunctionalities";

const projectSection = document.querySelector(".projectSection")
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

    projectSection.insertBefore(form, addProjectBtn);

    input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            addBtn.click(); 
        } else if (e.key === "Escape") {
            cancelBtn.click();
        }
    });

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
    });
}

export function projectSectionFormOpen() {
    const form = document.querySelector(".addProjectForm");
    form.style.display = "block";
};


export function projectSectionProjectMaker(name, form) {
    name = name.charAt(0).toUpperCase() + name.slice(1, );

    const project = document.createElement("li");
    const projectBtn = document.createElement("button");
    const icon = document.createElement("i");
    const projectName = document.createElement("span");
    const optionsBtn = document.createElement("button");
    const optionsIcon = document.createElement("i");

    project.classList.add("project");
    projectBtn.classList.add("project-button");
    icon.classList.add("fa-solid", "fa-bars");
    projectName.classList.add("project-name");
    optionsBtn.classList.add("project-optionsBtn");
    optionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "project-optionsIcon");

    optionsBtn.setAttribute("tabIndex", "0");

    projectName.textContent = name;

    optionsBtn.appendChild(optionsIcon);
    projectBtn.appendChild(icon);
    projectBtn.appendChild(projectName);
    projectBtn.appendChild(optionsBtn);
    project.appendChild(projectBtn);
    projectSectionContent.appendChild(project);

    const options = document.createElement("ul");
    const modifyOption = document.createElement("li");
    const deleteOption = document.createElement("li")
    const modifyOptionBtn = document.createElement("button");
    const deleteOptionBtn = document.createElement("button");


    modifyOptionBtn.textContent = "MODIFY";
    deleteOptionBtn.textContent = "DELETE";

    options.classList.add("project-options");
    modifyOptionBtn.classList.add("project-modifyOptionBtn");
    options.classList.toggle("project-options-isHidden");

    
    modifyOption.appendChild(modifyOptionBtn);
    deleteOption.appendChild(deleteOptionBtn);
    
    options.appendChild(modifyOption);
    options.appendChild(deleteOption);
    projectBtn.appendChild(options);

   projectBtn.addEventListener("click", () => {
    manageActiveProject(projectBtn);
    manageActiveTab("none");
   })


   optionsBtn.addEventListener("click", () => {
        options.classList.toggle("project-options-isHidden");
   })

   optionsBtn.addEventListener("blur", () => {
        const clickHandler = (e) => {
            if(options.classList.contains("project-options-isHidden")) return;
            if(modifyOptionBtn !== e.target || deleteOptionBtn !== e.target) {
                options.classList.toggle("project-options-isHidden");
                document.removeEventListener("click", clickHandler);
            }
        }

        document.addEventListener("click", clickHandler);
   })

   modifyOptionBtn.addEventListener("click", () => {
        optionsBtn.disabled = true;

        const modifyInput = document.createElement("input");
        modifyInput.classList.add("project-modifyInput");
        modifyInput.value = projectName.textContent;

        projectName.style.display = "none";
        
        project.classList.add("project-isModifyState");
        projectBtn.classList.add("project-button-isModifyState");

        const modifyButtons = document.createElement("div");
        const renameBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");

        renameBtn.textContent = "RENAME";
        cancelBtn.textContent = "CANCEL";

        modifyButtons.classList.add("project-modifyButtons");
        renameBtn.classList.add("addButton");
        cancelBtn.classList.add("cancelButton");

        modifyButtons.appendChild(renameBtn);
        modifyButtons.appendChild(cancelBtn);

        project.appendChild(modifyButtons);

        projectBtn.insertBefore(modifyInput, optionsBtn);
        modifyInput.focus();

        modifyInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                renameBtn.click();
            } else if (e.key === "Escape") {
                cancelBtn.click();
            }
        });

        renameBtn.addEventListener("click", () => {
            projectName.style.display = "inline-block";
            name = modifyInput.value;
            name = name.charAt(0).toUpperCase() + name.slice(1, );

            projectName.textContent = name;

            cancelBtn.click();
        });

        cancelBtn.addEventListener("click", () => {
            projectName.style.display = "inline-block";
            modifyInput.style.display = "none";
            modifyButtons.style.display = "none";

            project.classList.remove("project-isModifyState");
            projectBtn.classList.remove("project-button-isModifyState");

            optionsBtn.disabled = false;
        });
   });

   deleteOptionBtn.addEventListener("click", () => {
        projectSectionContent.removeChild(project);
   })

   projectBtn.click();
}

export function manageActiveProject(projectClicked) {
    const projects = document.querySelectorAll(".project-button");

    projects.forEach(project => {
        if(project !== projectClicked) {
            project.classList.remove("active");
        } else {
            project.classList.add("active");
        }})
}









