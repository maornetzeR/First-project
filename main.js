const todoList = document.querySelector(".todo-list");
const buttons = document.querySelectorAll("button");

const ADD_BUTTON = buttons[0]
const REMOVE_BUTTON = buttons[1]


ADD_BUTTON.addEventListener("click", () => {

  let div = document.createElement("div");

  div.setAttribute("class", "item");
  
  div.innerText = "Maor is one of the kings"

  todoList.appendChild(div);
})



REMOVE_BUTTON.addEventListener("click", () =>{
  if(todoList.lastChild)
  {
    todoList.lastChild.remove();
  }
  else
  {
    alert("please provide a child for the todo list")
  }
})