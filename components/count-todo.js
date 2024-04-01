import { getAllTodo } from "../store/store.js"

const completedSpan = document.getElementById("completed-span")
const remainingSpan = document.getElementById("remaining-span")
const allSpan = document.getElementById("all-span")

export default function countTodo(){
    const todos = getAllTodo()
    const allTodosLength = todos.length
    const completedTodo = todos.filter((todo)=>todo.isCompleted).length
    const remainingTodo = allTodosLength - completedTodo

    completedSpan.textContent = completedTodo
    remainingSpan.textContent = remainingTodo
    allSpan.textContent = allTodosLength
}