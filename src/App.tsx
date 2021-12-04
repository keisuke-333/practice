import axios from "axios"
import { useState } from "react"
import { Todo } from "./Todo"

const App = () => {
  const [todos, setTodos] = useState<any>([])

  const onClickFethData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data)
    })
  }
  return (
    <div>
      <button onClick={onClickFethData}>データ取得</button>
      {todos.map((todo:any) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
        />
      ))}
    </div>
  )
}

export default App
