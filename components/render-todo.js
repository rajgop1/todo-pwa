import { getAllTodo } from '../store/store.js';
import countTodo from './count-todo.js';
import createTodoItem from './create-todo-item.js';

const todoList = document.getElementById('todo-list');

export default function renderTodo() {
  const todos = getAllTodo();
  clearTodo();
  if (todos.length > 0) {
    todos.map((todo) => {
      const todoItemContainer = createTodoItem(todo);
      todoList.appendChild(todoItemContainer);
    });
  } else {
    todoList.innerHTML = '<li>No Todos...</li>';
  }
  countTodo()
}

function clearTodo() {
  todoList.innerHTML = ``;
}
