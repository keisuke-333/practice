import axios from "axios"

const App = () => {
  const onClickFethData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data)
    })
  }
  return (
    <div>
      <button onClick={onClickFethData}>データ取得</button>
    </div>
  )
}

export default App
