import { findEmptyDataTabIndex, projectsArr, sortProjectsDataAttributes, modifyProjectDataName, applyTasks, setTasks } from "./localStorageAndState";
import { tabsEventHandler, Tab, clear } from "./tabFunctionalities";
import { addTaskBtnMaker, taskFormMaker } from "./tasksHandler";

const projectSection = document.querySelector(".projectSection")
export const addProjectBtn = document.querySelector(".projectSection-addProjectButton");
const projectSectionContent = document.querySelector(".projectSection-content");

export function projectFormMaker() {

    const projectMakerForm = document.createElement("form");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const projectFormBtnContainer = document.createElement("div");

    nameLabel.setAttribute("for", "projectNameInput");
    nameLabel.textContent = "Enter projects name";

    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Project Name");
    nameInput.setAttribute("maxlength", "20");
    nameInput.setAttribute("id", "projectNameInput");

    projectMakerForm.classList.add("addProjectForm");
    nameLabel.classList.add("is-visually-hidden");
    nameInput.classList.add("addProjectForm-input");
    projectFormBtnContainer.classList.add("buttonContainer");
    addBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    addBtn.textContent = "ADD";
    cancelBtn.textContent = "Cancel";

    projectMakerForm.style.display = "none";

    projectFormBtnContainer.appendChild(addBtn);
    projectFormBtnContainer.appendChild(cancelBtn);

    projectMakerForm.appendChild(nameLabel);
    projectMakerForm.appendChild(nameInput);
    projectMakerForm.appendChild(projectFormBtnContainer);

    projectSection.insertBefore(projectMakerForm, addProjectBtn);

    nameInput.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            addBtn.click(); 
        } else if (e.key === "Escape") {
            cancelBtn.click();
        }
    });

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if(nameInput.value === "") {
            alert("The project name cannot be empty");
            return;
        };

        projectMaker(nameInput.value, findEmptyDataTabIndex());

        let newProject = new Tab(nameInput.value, []);
        projectsArr.push(newProject);


        projectMakerForm.style.display = "none";
        nameInput.value = "";
    });

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        projectMakerForm.style.display = "none";
    });
}

export function projectFormOpener() {
    const projcetForm = document.querySelector(".addProjectForm");
    projcetForm.style.display = "block";
};


export function projectMaker(name, id) {
    // General project section
    let clickedOnce = false;

    name = name.charAt(0).toUpperCase() + name.slice(1, );

    const project = document.createElement("li");
    const projectBtn = document.createElement("button");
    const projectIcon = document.createElement("i");
    const projectName = document.createElement("span");
    const projectOptionsBtn = document.createElement("button");
    const optionsBtnAccesibilityText = document.createElement("span");
    const projectOptionsIcon = document.createElement("i");

    project.classList.add("project");
    projectBtn.classList.add("project-button", "tab");
    projectIcon.classList.add("fa-solid", "fa-bars");
    projectName.classList.add("project-name");
    projectOptionsBtn.classList.add("project-optionsBtn");
    optionsBtnAccesibilityText.classList.add("is-visually-hidden");
    projectOptionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "project-optionsIcon");

    projectBtn.setAttribute("data-project-index", `${id}`);

    projectOptionsBtn.setAttribute("tabIndex", "0");
    projectOptionsBtn.setAttribute("aria-controls", "options")

    projectName.textContent = name;
    optionsBtnAccesibilityText.textContent = "Options";

    projectOptionsBtn.appendChild(projectOptionsIcon);
    projectOptionsBtn.appendChild(optionsBtnAccesibilityText);

    projectBtn.appendChild(projectIcon);
    projectBtn.appendChild(projectName);
    projectBtn.appendChild(projectOptionsBtn);
    project.appendChild(projectBtn);
    projectSectionContent.appendChild(project);

    projectBtn.addEventListener("click", () => {
        console.log(projectsArr)
        tabsEventHandler(projectBtn, true);
        addTaskBtnMaker();
        taskFormMaker();
        applyTasks();
        });

    

    // Options menu

    const projecOptions = document.createElement("ul");
    const modifyOption = document.createElement("li");
    const deleteOption = document.createElement("li")
    const modifyOptionBtn = document.createElement("button");
    const deleteOptionBtn = document.createElement("button");

    modifyOptionBtn.textContent = "MODIFY";
    deleteOptionBtn.textContent = "DELETE";

    projecOptions.classList.add("project-options", "project-options-isHidden");
    projecOptions.setAttribute("id", "options");

    modifyOptionBtn.classList.add("project-modifyOptionBtn");

    
    modifyOption.appendChild(modifyOptionBtn);
    deleteOption.appendChild(deleteOptionBtn);
    
    projecOptions.appendChild(modifyOption);
    projecOptions.appendChild(deleteOption);
    projectBtn.appendChild(projecOptions);

    projectOptionsBtn.addEventListener("click", () => {
        projecOptions.classList.toggle("project-options-isHidden");
    })

    projectOptionsBtn.addEventListener("blur", () => {
        const clickHandler = (e) => {
            if(projecOptions.classList.contains("project-options-isHidden")) return;
            if(modifyOptionBtn !== e.target || deleteOptionBtn !== e.target) {
                projecOptions.classList.add("project-options-isHidden");
                document.removeEventListener("click", clickHandler);
            }
        }

        document.addEventListener("click", clickHandler);
    })


    // Modify option section
    const modifyNameInput = document.createElement("input");

    modifyNameInput.classList.add("project-modifyInput");
    modifyNameInput.setAttribute("aria-label", "Enter new project name, text input");
    modifyNameInput.value = projectName.textContent;
    modifyNameInput.style.display = "none";

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

    modifyButtons.style.display = "none";

    projectBtn.insertBefore(modifyNameInput, projectOptionsBtn);

    modifyOptionBtn.addEventListener("click", () => {
        projectOptionsBtn.disabled = true;

    modifyNameInput.style.display = "block";
    projectName.style.display = "none";
    modifyButtons.style.display = "flex";

    modifyNameInput.value = projectName.textContent;

    project.classList.add("project-isModifyState");
    projectBtn.classList.add("project-button-isModifyState");

    modifyNameInput.focus();
    });

    // Options for when you are modifying-renaming the project name

    renameBtn.addEventListener("click", (e) => {
        name = modifyNameInput.value;
        name = name.charAt(0).toUpperCase() + name.slice(1, );

        e.stopPropagation();

        if(name === "") {
            alert("The project name cannot be empty");
            return;
        } else {
            projectName.style.display = "inline-block";
            projectName.textContent = name;
            cancelBtn.click();
            modifyProjectDataName(name, projectBtn.getAttribute("data-project-index"));
        }
    });

    cancelBtn.addEventListener("click", () => {
        projectName.style.display = "inline-block";
        modifyNameInput.style.display = "none";
        modifyButtons.style.display = "none";

        project.classList.remove("project-isModifyState");
        projectBtn.classList.remove("project-button-isModifyState");

        projectOptionsBtn.disabled = false;

        projectBtn.click();
    });

   // Delete section

   deleteOptionBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let confirmed = confirm("Are you sure you want to delete this project");

        if(confirmed === true) {
        projectsArr.splice(projectBtn.getAttribute("data-project-index"), 1);
        projectSectionContent.removeChild(project);
        sortProjectsDataAttributes();
        clear();
        } else {
            return;
        }

        
   })

   modifyNameInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                renameBtn.click();
            } else if (e.key === "Escape") {
                cancelBtn.click();
            }});

   // End of delete section

   tabsEventHandler(projectBtn, false);
   addTaskBtnMaker();
   taskFormMaker();
};










  




