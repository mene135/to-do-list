import {
  findEmptyDataTabIndex,
  projectsArr,
  sortProjectsDataAttributes,
  modifyProjectDataName,
} from "./localStorageAndState"
import { tabsEventHandler, Tab, clear } from "./tabFunctionalities"
import { addTaskBtnMaker, taskFormMaker } from "./tasksHandler"
import { setToastNtMessage, activateToastNt } from "./toastNt"

const projectSection = document.querySelector(".projectSection")
export const addProjectBtn = document.querySelector(".addProjectBtn")
const projectSectionContent = document.querySelector(
  ".js-projectSection-content",
)

export function projectMaker(name, id) {
  // General project section

  const nameToUppercase = name.charAt(0).toUpperCase() + name.slice(1)

  const project = document.createElement("li")

  const projectBtn = document.createElement("button")
  const projectIcon = document.createElement("i")
  const projectName = document.createElement("span")

  const projectOptionsBtn = document.createElement("button")
  const optionsBtnAccesibilityText = document.createElement("span")
  const projectOptionsIcon = document.createElement("i")

  project.classList.add("project")
  projectBtn.classList.add("project-btn", "button-primarySkin", "js-tab")
  projectIcon.classList.add("fa-solid", "fa-bars")
  projectName.classList.add("project-name")
  projectOptionsBtn.classList.add("project-optionsBtn")
  optionsBtnAccesibilityText.classList.add("is-visually-hidden")
  projectOptionsIcon.classList.add(
    "fa-solid",
    "fa-ellipsis-vertical",
    "project-optionsIcon",
  )

  projectBtn.setAttribute("data-project-index", `${id}`)

  projectOptionsBtn.setAttribute("tabIndex", "0")
  projectOptionsBtn.setAttribute("aria-controls", "options")

  projectName.textContent = nameToUppercase;
  optionsBtnAccesibilityText.textContent = "Options"

  projectOptionsBtn.appendChild(projectOptionsIcon)
  projectOptionsBtn.appendChild(optionsBtnAccesibilityText)

  projectBtn.appendChild(projectIcon)
  projectBtn.appendChild(projectName)
  projectBtn.appendChild(projectOptionsBtn)
  project.appendChild(projectBtn)
  projectSectionContent.appendChild(project)

  projectBtn.addEventListener("click", () => {
    tabsEventHandler(projectBtn, true)
    addTaskBtnMaker()
    taskFormMaker()
  })

  // Options menu

  const projecOptions = document.createElement("ul")
  const modifyOption = document.createElement("li")
  const deleteOption = document.createElement("li")
  const modifyOptionBtn = document.createElement("button")
  const deleteOptionBtn = document.createElement("button")

  modifyOptionBtn.textContent = "MODIFY"
  deleteOptionBtn.textContent = "DELETE"

  projecOptions.classList.add("project-options", "project-options-isHidden")
  projecOptions.setAttribute("id", "options")

  modifyOptionBtn.classList.add("project-modifyOptionBtn")

  modifyOption.appendChild(modifyOptionBtn)
  deleteOption.appendChild(deleteOptionBtn)

  projecOptions.appendChild(modifyOption)
  projecOptions.appendChild(deleteOption)
  projectBtn.appendChild(projecOptions)

  projectOptionsBtn.addEventListener("click", () => {
    projecOptions.classList.toggle("project-options-isHidden")
  })

  projectOptionsBtn.addEventListener("blur", () => {
    const clickHandler = (e) => {
      if (projecOptions.classList.contains("project-options-isHidden")) return
      if (modifyOptionBtn !== e.target || deleteOptionBtn !== e.target) {
        projecOptions.classList.add("project-options-isHidden")
        document.removeEventListener("click", clickHandler)
      }
    }

    document.addEventListener("click", clickHandler)
  })

  // Modify option section
  const modifyNameInput = document.createElement("input")

  modifyNameInput.classList.add("project-modifyInput")
  modifyNameInput.setAttribute(
    "aria-label",
    "Enter new project name, text input",
  )
  modifyNameInput.value = projectName.textContent
  modifyNameInput.style.display = "none"

  const modifyButtons = document.createElement("div")
  const renameBtn = document.createElement("button")
  const cancelBtn = document.createElement("button")

  renameBtn.textContent = "RENAME"
  cancelBtn.textContent = "CANCEL"

  modifyButtons.classList.add("modifyProject-options")
  renameBtn.classList.add("addButton")
  cancelBtn.classList.add("cancelButton")

  modifyButtons.appendChild(renameBtn)
  modifyButtons.appendChild(cancelBtn)

  project.appendChild(modifyButtons)

  modifyButtons.style.display = "none"

  projectBtn.insertBefore(modifyNameInput, projectOptionsBtn)

  modifyOptionBtn.addEventListener("click", () => {
    projectOptionsBtn.disabled = true

    modifyNameInput.style.display = "block"
    projectName.style.display = "none"
    modifyButtons.style.display = "flex"

    modifyNameInput.value = projectName.textContent

    project.classList.add("project-isModifyState")
    projectBtn.classList.add("project-btn-isModifyState")

    modifyNameInput.focus()
  })

  // Options for when you are modifying-renaming the project name

  renameBtn.addEventListener("click", (e) => {
    let newName = modifyNameInput.value
    newName = newName.charAt(0).toUpperCase() + name.slice(1)

    e.stopPropagation()

    if (newName === "") {
      setToastNtMessage("The project name cannot be empty")
      activateToastNt()
      return
    }

    projectName.style.display = "inline-block"
    projectName.textContent = newName
    cancelBtn.click()
    modifyProjectDataName(newName, projectBtn.getAttribute("data-project-index"))

  })

  cancelBtn.addEventListener("click", () => {
    projectName.style.display = "inline-block"
    modifyNameInput.style.display = "none"
    modifyButtons.style.display = "none"

    project.classList.remove("project-isModifyState")
    projectBtn.classList.remove("project-btn-isModifyState")

    projectOptionsBtn.disabled = false

    projectBtn.click()
  })

  // Delete section

  deleteOptionBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    projectsArr.splice(projectBtn.getAttribute("data-project-index"), 1)
    projectSectionContent.removeChild(project)
    sortProjectsDataAttributes()
    clear()
  })


  modifyNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      renameBtn.click()
    } else if (e.key === "Escape") {
      cancelBtn.click()
    }
  })

  // End of delete section

  tabsEventHandler(projectBtn, false)
  addTaskBtnMaker()
  taskFormMaker()
}


export function projectFormMaker() {
  const projectMakerForm = document.createElement("form")
  const nameLabel = document.createElement("label")
  const nameInput = document.createElement("input")
  const addBtn = document.createElement("button")
  const cancelBtn = document.createElement("button")
  const projectFormBtnContainer = document.createElement("div")

  nameLabel.setAttribute("for", "projectNameInput")
  nameLabel.textContent = "Enter projects name"

  nameInput.setAttribute("type", "text")
  nameInput.setAttribute("placeholder", "Project Name")
  nameInput.setAttribute("maxlength", "20")
  nameInput.setAttribute("id", "projectNameInput")

  projectMakerForm.classList.add("projectMakerForm")
  nameLabel.classList.add("is-visually-hidden")
  nameInput.classList.add("projectMakerForm-input")
  projectFormBtnContainer.classList.add("buttonContainer")
  addBtn.classList.add("addButton")
  cancelBtn.classList.add("cancelButton")

  addBtn.textContent = "ADD"
  cancelBtn.textContent = "Cancel"

  projectMakerForm.style.display = "none"

  projectFormBtnContainer.appendChild(addBtn)
  projectFormBtnContainer.appendChild(cancelBtn)

  projectMakerForm.appendChild(nameLabel)
  projectMakerForm.appendChild(nameInput)
  projectMakerForm.appendChild(projectFormBtnContainer)

  projectSection.insertBefore(projectMakerForm, addProjectBtn)

  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addBtn.click()
    } else if (e.key === "Escape") {
      cancelBtn.click()
    }
  })

  addBtn.addEventListener("click", (e) => {
    e.preventDefault()

    if (nameInput.value === "") {
      setToastNtMessage("The project name cannot be empty!")
      activateToastNt()
      document.querySelector(".projectMakerForm-input").focus();
      return
    }

    const newProject = new Tab(nameInput.value, [])
    projectsArr.push(newProject)

    projectMaker(nameInput.value, findEmptyDataTabIndex())

    projectMakerForm.style.display = "none"
    nameInput.value = ""
  })

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault()
    projectMakerForm.style.display = "none"
  })
}

export function projectFormOpener() {
  const projcetForm = document.querySelector(".projectMakerForm")
  projcetForm.style.display = "block"
}

