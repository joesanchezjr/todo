import { useState } from "react"
import TodoInput from "./todo-input"

import defaultTodos from "../todos.json"

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo?.isComplete ? "line-through" : "" }}>
        <input
          type="checkbox"
          checked={todo?.isComplete}
          onChange={() => toggleComplete(todo.id)}
        />
        {todo.text}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

const TodoList = () => {
  const [todos, setTodos] = useState(defaultTodos)

  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  const toggleComplete = (id) => {
    const mapped = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(mapped)
  }
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id)
    setTodos(filtered)
  }

  return (
    <div className="todo-list">
      <TodoInput {...{ addTodo }} />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.length >= 1 ? (
          todos
            .sort((a, b) => a.dateCreated - b.dateCreated)
            .map((todo) => {
              const props = {
                todo,
                toggleComplete,
                deleteTodo,
              }

              return <Todo key={todo.id} {...props} />
            })
        ) : (
          <li>
            Nothing to do right now{" "}
            <span role="img" aria-label="Thumbs up emoji">
              👍
            </span>
          </li>
        )}
      </ul>
      <button
        onClick={() => {
          const filtered = todos.filter((todo) => !todo.isComplete)
          setTodos(filtered)
        }}
      >
        Remove completed todos
      </button>
    </div>
  )
}

export default TodoList
