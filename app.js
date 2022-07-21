//display a form where users can add tasks
//add new task on the form
//once submitted, grab the value from the form and display as a list on the ul
//when user click on a task, the task should provide a checkbox
//once the checkbox of a task is clicked the task will become grey to inform that the task has been completed


const formElement = document.querySelector("form");
const ulElement = document.querySelector("ul");

formElement.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputElement = document.querySelector("input");
    const task = inputElement.value;

    if (!task) {
        alert("please fill a task")
    } else {

        const newLiElement = document.createElement("li");
        const newParagElement = document.createElement("p");

        newLiElement.innerHTML = `<i class="far fa-square"></i>`;
        newParagElement.textContent = task;

        newLiElement.appendChild(newParagElement);

        ulElement.appendChild(newLiElement)

        inputElement.value = "";
    }
});

const iconElement = document.querySelector("i")

ulElement.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        doThis(e.target)
    }
})

function doThis(iElement) {
    iElement.classList.toggle("fa-square");
    iElement.classList.toggle("fa-check-square");
    iElement.parentElement.classList.toggle("text-muted")

}


