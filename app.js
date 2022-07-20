//display a form where users can add tasks
//add new task on the form
//once submitted, grab the value from the form and display as a list on the ul
//when user click on a task, the task should provide a checkbox
//once the checkbox of a task is clicked the task will become grey to inform that the task has been completed


const formElement = document.querySelector("form");
const taskList = document.querySelector("ul")


formElement.addEventListener("submit", function (e) {
    //preventing the default bahaviour of forms
    e.preventDefault();


    const inputElement = document.querySelector("input")

    //selecting the input value
    const task = inputElement.value;


    if (task === "") {
        alert("Please insert a task")
    } else {
        const listTaskElmt = document.createElement("li");
        listTaskElmt.innerHTML = `<i class="far fa-square"></i>`;


        const paragphElemt = document.createElement("p");
        paragphElemt.textContent = task;

        listTaskElmt.appendChild(paragphElemt);
        taskList.appendChild(listTaskElmt);



        //Cleaning the input field
        inputElement.value = ""
    }

});

document.querySelector("li").addEventListener("click", function () {
    console.log("item clicked");
})


