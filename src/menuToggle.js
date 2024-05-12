export const menuToggleBtn = document.querySelector(".menuToggle")
const nav = document.querySelector(".l-mainNav")

export function menuToggle() {
  if (document.documentElement.clientWidth <= 425) {
    nav.classList.toggle("nav-expanded-vertical")
    nav.classList.remove("nav-hidden-horizontal")

    isNavExpanded()
  }

  if (document.documentElement.clientWidth > 425) {
    nav.classList.toggle("nav-hidden-horizontal")
    nav.classList.remove("nav-expanded-vertical")

    isNavExpanded()
  }
}

export function isNavExpanded() {
  if (
    nav.classList.contains("nav-expanded-vertical") ||
    (nav.classList.contains("nav-hidden-horizontal") === false &&
      document.documentElement.clientWidth > 425)
  ) {
    menuToggleBtn.setAttribute("aria-expanded", "true")
  } else {
    menuToggleBtn.setAttribute("aria-expanded", "false")
  }
}
