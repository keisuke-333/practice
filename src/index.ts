import * as http from 'http'

const server = http.createServer((req, res) => {
  res.end('Hello!')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
)
