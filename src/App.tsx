import axios from "axios"
import { useState } from "react"
import { Todo } from "./Todo"
import { TodoType } from "./types/todo"

const App = () => {
  const [todos, setTodos] = useState<Array<TodoType>>([])

  const onClickFethData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }
  return (
    <div>
      <button onClick={onClickFethData}>データ取得</button>
      {todos.map((todo:any) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  )
}

export default App
