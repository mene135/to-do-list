export function findEmptyDataTabIndex() {
    const indexes = document.querySelectorAll("[data-tabIndex]");
    let foundEmptyIndex = false;
    let count = 0;

    while(foundEmptyIndex === false) {
        if(indexes[count] === undefined) {
            foundEmptyIndex = true;
        } else {
            count++;
        }
    }

    return count;
}

export const projectsArr = [];

console.log(projectsArr);