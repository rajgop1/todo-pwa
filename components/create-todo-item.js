import { removeTodo, updateTodo } from "../store/store.js";
import renderTodo from "./render-todo.js";

function createTodoItem(todo) {
  const todoItemContainer = document.createElement('li');
  const todoItem = document.createElement('span');
  const deleteTodoItem = document.createElement('button');
  const completedTodoItem = document.createElement("input")

  todoItemContainer.setAttribute('id', todo.id);
  todoItemContainer.style.cssText = `text-decoration: ${todo.isCompleted ? 'line-through' : 'none'}`
  todoItem.textContent = todo.value;
  deleteTodoItem.textContent = 'Delete';
  deleteTodoItem.addEventListener('click', (e) => {
    removeTodo(todo.id);
    renderTodo()
  });
  completedTodoItem.setAttribute("type", "checkbox")
  completedTodoItem.ariaLabel = "Mark Todo completion"
  if (todo.isCompleted) {
    completedTodoItem.setAttribute("checked", true)
  } else {
    completedTodoItem.removeAttribute("checked", false)
  }
  
  completedTodoItem.addEventListener("click", (e) => {
    const isCompleted = e.target.checked
    console.log(isCompleted)
    updateTodo(todo.id, "isCompleted", isCompleted)
    renderTodo()
  })

  todoItemContainer.append(completedTodoItem, todoItem, deleteTodoItem)
  return todoItemContainer;
}
export default createTodoItem;
