const store = {
  todo: [],
};

function setTodo(todo) {
  return store.todo.push(todo);
}

function removeTodo(todoId) {
  return (store.todo = store.todo.filter((todo) => todo.id !== todoId));
}

function getAllTodo() {
  return store.todo;
}

function updateTodo(id, key, value) {
  return store.todo.map((todo) => {
    if (todo.id === id) {
      todo[key] = value
    }
  })
}

export { setTodo, removeTodo, getAllTodo, updateTodo };
