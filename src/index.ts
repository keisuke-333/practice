import * as http from 'http'
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
} from './controllers/productController'

const server = http.createServer((req, res) => {
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res)
  } else if (
    req.url?.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3]
    getProduct(req, res, id)
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res)
  } else if (
    req.url?.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'PUT'
  ) {
    const id = req.url.split('/')[3]
    updateProduct(req, res, id)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ message: 'Route Not Found' }))
  }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () =>
  console.log(`Server running http://localhost:${PORT}`)
)
