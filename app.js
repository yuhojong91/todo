let todoList = []

function addTasks(e){
    e.preventDefault()
    let todoInput = document.querySelector("#todo_input");
    if (todoInput.value !== ""){
        todoList.push({task:todoInput.value, isCompleted:false})
        displayTodoList()
        todoInput.value = ""
    }
}

function displayTodoList(){
    let todoContainer = document.querySelector(".todo_list_box")
    let completedContainer = document.querySelector(".completed_todo_list_box")
    let todoTag = document.createElement("div")
    let button = document.createElement('button')
    button.innerText = "edit"

    todoList.map((todo,index) => {
        todoTag.innerText = todo['task']
        todoTag.id = index
        button.id = index
        todoTag.onclick = function(){
            if(todo['isCompleted'] === false){
                todo['isCompleted'] === true
                button.remove()

                todoTag.onclick = function(){
                    todoTag.remove()
                }

                completedContainer.appendChild(todoTag)
            }
        }
        todoContainer.appendChild(todoTag)
        todoContainer.appendChild(button)
        button.onclick = function(){
            if (button.id === todoTag.id){
                let newInput = document.createElement('input')
                let newButton = document.createElement('button')
                newButton.innerText = 'click'
                todoContainer.appendChild(newInput)
                todoContainer.appendChild(newButton)
                newButton.onclick = function(){
                    todoTag.innerText = newInput.value
                    newInput.remove()
                    newButton.remove()
                }
            }
        }
    })
}

