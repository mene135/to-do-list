const main = document.querySelector("main");

function mainFormMaker() {

}

export function initializeMainForProjects() {
    const addtaskBtn = document.createElement("button");
    addtaskBtn.textContent = "Add task";

    addtaskBtn.classList.add("addButton");

    main.appendChild(addtaskBtn);
}