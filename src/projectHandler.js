import { findEmptyDataTabIndex, projectsArr } from "./localStorageAndState";
import { tabsEventHandler, Tab } from "./tabFunctionalities";
import { addTaskBtnMaker, taskFormMaker } from "./tasksHandler";

const projectSection = document.querySelector(".projectSection")
export const addProjectBtn = document.querySelector(".projectSection-addProjectButton");
const projectSectionContent = document.querySelector(".projectSection-content");

export function projectSectionFormMaker() {

    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const addBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const formBtnContainer = document.createElement("form");

    label.setAttribute("for", "projectNameInput");
    label.textContent = "Enter projects name";

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Project Name");
    input.setAttribute("maxlength", "20");
    input.setAttribute("id", "projectNameInput");

    form.classList.add("addProjectForm");
    label.classList.add("is-visually-hidden");
    input.classList.add("addProjectForm-input");
    formBtnContainer.classList.add("buttonContainer");
    addBtn.classList.add("addButton");
    cancelBtn.classList.add("cancelButton");

    addBtn.textContent = "ADD";
    cancelBtn.textContent = "Cancel";

    form.style.display = "none";

    formBtnContainer.appendChild(addBtn);
    formBtnContainer.appendChild(cancelBtn);

    form.appendChild(label);
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
            alert("The project name cannot be empty");
            return;
        };

        projectSectionProjectMaker(input.value, findEmptyDataTabIndex());
        let newProject = new Tab(input.value, []);
        projectsArr.push(newProject);
        console.log(projectsArr);

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


export function projectSectionProjectMaker(name, id) {
    // General project section

    name = name.charAt(0).toUpperCase() + name.slice(1, );

    const project = document.createElement("li");
    const projectBtn = document.createElement("button");
    const icon = document.createElement("i");
    const projectName = document.createElement("span");
    const optionsBtn = document.createElement("button");
    const optionsBtnAccesibilityText = document.createElement("span");
    const optionsIcon = document.createElement("i");

    project.classList.add("project");
    projectBtn.classList.add("project-button", "tab");
    icon.classList.add("fa-solid", "fa-bars");
    projectName.classList.add("project-name");
    optionsBtn.classList.add("project-optionsBtn");
    optionsBtnAccesibilityText.classList.add("is-visually-hidden");
    optionsIcon.classList.add("fa-solid", "fa-ellipsis-vertical", "project-optionsIcon");

    projectBtn.setAttribute("data-tabIndex", `${id}`);

    optionsBtn.setAttribute("tabIndex", "0");
    optionsBtn.setAttribute("aria-controls", "options")

    projectName.textContent = name;
    optionsBtnAccesibilityText.textContent = "Options";

    optionsBtn.appendChild(optionsIcon);
    optionsBtn.appendChild(optionsBtnAccesibilityText);

    projectBtn.appendChild(icon);
    projectBtn.appendChild(projectName);
    projectBtn.appendChild(optionsBtn);
    project.appendChild(projectBtn);
    projectSectionContent.appendChild(project);

    projectBtn.addEventListener("click", () => {
        tabsEventHandler(projectBtn);
        addTaskBtnMaker();
        taskFormMaker();
        });

    // Options menu

    const options = document.createElement("ul");
    const modifyOption = document.createElement("li");
    const deleteOption = document.createElement("li")
    const modifyOptionBtn = document.createElement("button");
    const deleteOptionBtn = document.createElement("button");

    modifyOptionBtn.textContent = "MODIFY";
    deleteOptionBtn.textContent = "DELETE";

    options.classList.add("project-options");
    options.setAttribute("id", "options");

    modifyOptionBtn.classList.add("project-modifyOptionBtn");
    options.classList.toggle("project-options-isHidden");

    
    modifyOption.appendChild(modifyOptionBtn);
    deleteOption.appendChild(deleteOptionBtn);
    
    options.appendChild(modifyOption);
    options.appendChild(deleteOption);
    projectBtn.appendChild(options);

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


    // Modify option section
    const modifyInput = document.createElement("input");

    modifyInput.classList.add("project-modifyInput");
    modifyInput.setAttribute("aria-label", "Enter new project name, text input");
    modifyInput.value = projectName.textContent;

    modifyInput.style.display = "none";

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

    projectBtn.insertBefore(modifyInput, optionsBtn);

    modifyOptionBtn.addEventListener("click", () => {
    optionsBtn.disabled = true;

    modifyInput.style.display = "block";
    projectName.style.display = "none";
    modifyButtons.style.display = "flex";

    modifyInput.value = projectName.textContent;

    project.classList.add("project-isModifyState");
    projectBtn.classList.add("project-button-isModifyState");

    modifyInput.focus();
    });

    // Options for when you are modifying-renaming the project name

    renameBtn.addEventListener("click", (e) => {
        name = modifyInput.value;
        name = name.charAt(0).toUpperCase() + name.slice(1, );

        e.stopPropagation();

        if(name === "") {
            alert("The project name cannot be empty");
            return;
        } else {
            projectName.style.display = "inline-block";
            projectName.textContent = name;
            cancelBtn.click();
        }
    });

    cancelBtn.addEventListener("click", () => {
        projectName.style.display = "inline-block";
        modifyInput.style.display = "none";
        modifyButtons.style.display = "none";

        project.classList.remove("project-isModifyState");
        projectBtn.classList.remove("project-button-isModifyState");

        optionsBtn.disabled = false;

        projectBtn.click();
    });

   // Delete section

   deleteOptionBtn.addEventListener("click", () => {
        projectsArr.splice(projectBtn.getAttribute("data-tabIndex"), 1);
        projectSectionContent.removeChild(project);
        console.log(projectsArr);
   })

   modifyInput.addEventListener("keydown", (e) => {
            if(e.key === "Enter") {
                renameBtn.click();
            } else if (e.key === "Escape") {
                cancelBtn.click();
            }});

   // End of delete section

    projectBtn.click();
};






  




