import {
  toggleThemeBtn,
  toggleTheme,
  setThemeLocalStorage,
  applyThemeLocalStorage,
} from "./themes/themeToggle"
import { menuToggleBtn, menuToggle, isNavExpanded } from "./menuToggle"
import { tabsEventHandler } from "./tabFunctionalities"
import {
  addProjectBtn,
  projectMaker,
  projectFormMaker,
  projectFormOpener,
} from "./projectHandler"
import {
  applyProjectsLocalStorage,
  setProjectsLocalStorage,
} from "./localStorageAndState"
import { toastNtMaker, setToastNtMessage, activateToastNt } from "./toastNt"

toggleThemeBtn.addEventListener("click", toggleTheme)
menuToggleBtn.addEventListener("click", menuToggle)
addProjectBtn.addEventListener("click", () => {
  if (document.querySelector(".projectMakerForm").style.display === "block") {
    setToastNtMessage("You must complete the form you started!");
    activateToastNt();
    document.querySelector(".projectMakerForm-input").focus()
    return
  }
  projectFormOpener()
  document.querySelector(".projectMakerForm-input").focus()
})

const tabs = document.querySelectorAll(".js-tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsEventHandler(tab)
  })
})

window.onload = () => {
  applyThemeLocalStorage()
  applyProjectsLocalStorage(projectMaker)
  isNavExpanded()
  projectFormMaker()
  toastNtMaker()

  document.querySelector(".homeBtn").click()
}

window.addEventListener("beforeunload", () => {
  setThemeLocalStorage()
  setProjectsLocalStorage()
})
