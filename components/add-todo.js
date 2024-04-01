import { setTodo } from '../store/store.js';
import renderTodo from './render-todo.js';

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function (e) {
  const todoValue = todoInput.value;
  const id = Date.now();

  const todoObject = {
    id,
    value: todoValue,
    isCompleted: false,
  };

  setTodo(todoObject);
  console.log(todoObject);

  renderTodo();
  todoInput.value = '';
  todoInput.focus();
});
