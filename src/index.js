import {
  toggleThemeBtn,
  toggleTheme,
  setThemeLocalStorage,
  applyThemeLocalStorage,
} from "./themes/themeToggle"
import { menuToggleBtn, menuToggle, isNavExpanded } from "./menuToggle"
import { tabs, tabsEventHandler } from "./tabFunctionalities"
import {
  addProjectBtn,
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

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsEventHandler(tab)
  })
})

window.onload = () => {
  applyThemeLocalStorage()
  applyProjectsLocalStorage()
  isNavExpanded()
  projectFormMaker()
  toastNtMaker()

  document.querySelector(".homeBtn").click()
}

window.addEventListener("beforeunload", () => {
  setThemeLocalStorage()
  setProjectsLocalStorage()
})
