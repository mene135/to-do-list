export function toastNtMaker() {
    const toastNt = document.createElement("div")
    const toastNtIcon = document.createElement("i")
    const toastNtMessage = document.createElement("p")

    toastNt.classList.add("toastNt")
    toastNtIcon.classList.add("fa-solid", "fa-bell", "toastNt-icon")
    toastNtMessage.classList.add("toastNt-message")

    toastNtIcon.style.color = "#a80505";

    toastNt.appendChild(toastNtIcon)
    toastNt.appendChild(toastNtMessage)
    document.body.appendChild(toastNt)
}

export function setToastNtMessage(message) {
    document.querySelector(".toastNt-message").textContent = `${message}`;
}

export function activateToastNt() {
    const toastNt = document.querySelector(".toastNt");
    toastNt.classList.add("toastNt-isActive");

    setTimeout(() => {
        toastNt.classList.remove("toastNt-isActive");
    }, 3000);
}