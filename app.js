//Bring in DOM elements

let taskInput = document.querySelector(".todo-input");
const submit = document.querySelector(".submit-button");
let tasksContainer = document.querySelector(".tasks-container");

//Event listener to add todo
submit.addEventListener("click", addToDo )

// Function Add to do
function addToDo(event){
    let task = taskInput.value

    //Create New Div
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo-Div")

    //Create New Todo Item
    const todoItem = document.createElement("p")
    todoItem.classList.add("todo-item")
    todoItem.innerText = task
    todoDiv.appendChild(todoItem)

    //Create Button Div
    const buttonDiv = document.createElement("div")
    buttonDiv.classList.add("button-div")
    todoDiv.appendChild(buttonDiv)

    //Create Done Button
    const doneButton = document.createElement("button")
    doneButton.classList.add("done-button")
    doneButton.innerHTML = "done"
    buttonDiv.appendChild(doneButton)

    //Create Deletee Button
    const deletebutton = document.createElement("button")
    doneButton.classList.add("delete-button")
    deletebutton.innerHTML = "trash"
    buttonDiv.appendChild(deletebutton)

    //Make this todo appear on the screen
    tasksContainer.appendChild(todoDiv)

    
    //Delete Button Functionality
    deletebutton.addEventListener("click", deleteToDo)

    function deleteToDo(){
        todoDiv.classList.add("fall")
        tasksContainer.addEventListener("transitionend", function(){
            tasksContainer.removeChild(todoDiv)
        })
        
    }

    //Done Button Funtionality
    doneButton.addEventListener("click", doneToDo)

    function doneToDo(){
        todoItem.classList.toggle("completed")
        
    }



    if(task ===""){
        alert("Please Enter a task");

    }
}







