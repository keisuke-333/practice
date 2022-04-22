import * as http from 'http'
import products from './data/products.json'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(products))
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
)
