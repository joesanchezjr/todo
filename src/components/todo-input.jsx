import { useState } from "react"

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo) return
    const todoObj = createTodoObject(todo)
    addTodo(todoObj)
    setTodo("") // clear form after submission
  }

  const createTodoObject = (todoString) => {
    // const hyphenated = todoString
    //   .toLowerCase()
    //   .replaceAll(/\s+/g, "-")
    const dateCreated = new Date().getTime()
    return {
      text: todoString,
      id: `todo-${dateCreated}`, // hyphenated
      isComplete: false,
      dateCreated,
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        style={{ marginRight: "1rem" }}
        type="text"
      />
      <button>Add Item</button>
    </form>
  )
}

export default TodoInput
