import { projectMaker } from "./projectHandler"
import { taskMaker } from "./tasksHandler"
import {
  differenceInMilliseconds,
  millisecondsToHours,
  isSameWeek,
} from "date-fns"


export function findEmptyDataTabIndex() {
  const indexes = document.querySelectorAll("[data-project-index]")
  let foundEmptyIndex = false
  let count = 0

  while (foundEmptyIndex === false) {
    if (indexes[count] === undefined) {
      foundEmptyIndex = true
    } else {
      count += 1
    }
  }

  return count
}

export const projectsArr = []
const homeBtnAllTasksArr = []
const importantArr = []
const todayArr = []
const weekArr = []

export function sortProjectsDataAttributes() {
  const projects = document.querySelectorAll("[data-project-index]")
  let count = 0

  projects.forEach((project) => {
    project.setAttribute("data-project-index", `${count}`)
    count += 1;
  })
}

export function modifyProjectDataName(newName, index) {
  projectsArr[index].tabName = newName
}

export function setProjectsLocalStorage() {
  localStorage.setItem("Projects", JSON.stringify(projectsArr))
}

export function applyProjectsLocalStorage(cb) {
  const localStateProjectArr = JSON.parse(localStorage.getItem("Projects"))

  for (let i = 0; i < localStateProjectArr.length; i += 1) {
    projectsArr.push(localStateProjectArr[i])
  }

  for (let i = 0; i < projectsArr.length; i += 1) {
    cb(projectsArr[i].tabName, i)
  }
}



export function assignTaskIndex() {
  const currActiveProjectIndex = parseInt(
    document.querySelector(".is-active").getAttribute("data-project-index"), 10
  )

  for (let i = 0; i < projectsArr[currActiveProjectIndex].length + 1; i += 1) {
    if (projectsArr[currActiveProjectIndex].tabTasks[i] === undefined) {
      return i;
    }
  }

  return undefined;
}

export function sortTaskIndex(taskRemoved) {
  for (let i = 0; i < projectsArr.length; i += 1) {
    for (let j = 0; j < projectsArr[i].tabTasks.length; j += 1) {
      if (taskRemoved <= projectsArr[i].tabTasks[j].index) {
        projectsArr[i].tabTasks[j].index -= 1
      }
    }
  }
}

export function updateProject() {
  const active = document.querySelector(".is-active")
  active.click()
}

export function manageAllTasks() {
  while (homeBtnAllTasksArr.length !== 0) {
    homeBtnAllTasksArr.pop()
  }

  for (let i = 0; i < projectsArr.length; i += 1) {
    for (let j = 0; j < projectsArr[i].tabTasks.length; j += 1) {
      homeBtnAllTasksArr.push(projectsArr[i].tabTasks[j])
    }
  }
}

export function manageImportant() {
  while (importantArr.length !== 0) {
    importantArr.pop()
  }

  for (let i = 0; i < projectsArr.length; i += 1) {
    for (let j = 0; j < projectsArr[i].tabTasks.length; j += 1) {
      if (projectsArr[i].tabTasks[j].important === true) {
        importantArr.push(projectsArr[i].tabTasks[j])
      }
    }
  }
}

function manageToday() {
  while (todayArr.length !== 0) {
    todayArr.pop()
  }

  let today = new Date()
  const newDay = today.getDate()
  const newMonth = today.getMonth()
  const newYear = today.getFullYear()

  today = new Date(newYear, newMonth, newDay)

  for (let i = 0; i < projectsArr.length; i += 1) {
    for (let j = 0; j < projectsArr[i].tabTasks.length; j += 1) {
      const taskDate = projectsArr[i].tabTasks[j].date
      const difference = millisecondsToHours(
        differenceInMilliseconds(taskDate, today),
      )

      if (difference < 24 && difference >= 0) {
        todayArr.push(projectsArr[i].tabTasks[j])
      }
    }
  }
}

function manageWeek() {
  while (weekArr.length !== 0) {
    weekArr.pop()
  }

  const today = new Date()

  for (let i = 0; i < projectsArr.length; i += 1) {
    for (let j = 0; j < projectsArr[i].tabTasks.length; j += 1) {
      const taskDate = projectsArr[i].tabTasks[j].date
      if (isSameWeek(taskDate, today, { weekStartsOn: 1 }) === true) {
        weekArr.push(projectsArr[i].tabTasks[j])
      }
    }
  }
}

export function applyTasks() {
  const currActiveTab = document.querySelector(".is-active")

  if (currActiveTab == null) return

  if (currActiveTab.classList.contains("homeBtn")) {
    if (currActiveTab.classList.contains("homeBtn-allTasks")) {
      manageAllTasks()
      homeBtnAllTasksArr.forEach((task) => {
        taskMaker(
          task.title,
          task.details,
          task.date,
          task.important,
          task.checked,
          task.index,
        )
      })
    } else if (currActiveTab.classList.contains("homeBtn-important")) {
      manageImportant()
      importantArr.forEach((task) => {
        taskMaker(
          task.title,
          task.details,
          task.date,
          task.important,
          task.checked,
          task.index,
        )
      })
    } else if (currActiveTab.classList.contains("homeBtn-today")) {
      manageToday()
      todayArr.forEach((task) => {
        taskMaker(
          task.title,
          task.details,
          task.date,
          task.important,
          task.checked,
          task.index,
        )
      })
    } else if (currActiveTab.classList.contains("homeBtn-thisWeek")) {
      manageWeek()
      weekArr.forEach((task) => {
        taskMaker(
          task.title,
          task.details,
          task.date,
          task.important,
          task.checked,
          task.index,
        )
      })
    }
  }

  if (currActiveTab.classList.contains("project-btn")) {
    const currActiveProjectIndex = document
      .querySelector(".is-active")
      .getAttribute("data-project-index")

    if (projectsArr[currActiveProjectIndex].tabTasks.length === 0) return

    projectsArr[currActiveProjectIndex].tabTasks.forEach((task) => {
      taskMaker(
        task.title,
        task.details,
        task.date,
        task.important,
        task.checked,
        task.index,
      )
    })
  }
}
