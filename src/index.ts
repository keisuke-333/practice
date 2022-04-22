import * as http from 'http'
import { getProducts } from './controllers/productController'
import products from './data/products.json'

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route Not Found' }))
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
)
