import TodoList from "./components/todo-list"

import "./App.css"

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span role="img" aria-label="White checkmark in green box">
            ✅
          </span>{" "}
          To Do:
        </h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  )
}

export default App
