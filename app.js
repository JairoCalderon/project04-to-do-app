//display a form where users can add tasks
//add new task on the form
//once submitted, grab the value from the form and display as a list on the ul
//when user click on a task, the task should provide a checkbox
//once the checkbox of a task is clicked the task will become grey to inform that the task has been completed


const formElement = document.querySelector("form");
const ulElement = document.querySelector("ul")


formElement.addEventListener("submit", function (e) {
    //preventing the default bahaviour of forms
    e.preventDefault();

    const inputElement = document.querySelector("input")

    //selecting the input value
    const task = inputElement.value;


    if (task === "") {
        alert("Please insert a task")
    } else {
        const listItemElmt = document.createElement("li");
        listItemElmt.innerHTML = `<i class="far fa-square"></i>`;

        const paragphElemt = document.createElement("p");
        paragphElemt.textContent = task;
        listItemElmt.appendChild(paragphElemt);

        // const ulElement = document.querySelector("ul")
        ulElement.appendChild(listItemElmt);


        //Cleaning the input field
        inputElement.value = ""
    }

});

ulElement.addEventListener("click", function (e) {
    if (e.target.tagName === "I") {
        updateToDo(e.target)
    };
})

function updateToDo(iElement) {
    iElement.classList.toggle("fa-square");
    iElement.classList.toggle("fa-check-square")
    iElement.parentElement.classList.toggle("text-muted")
}


