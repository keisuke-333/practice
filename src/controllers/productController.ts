import { IncomingMessage, ServerResponse } from 'http'
import * as Product from '../models/productModel'

export const getProducts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  try {
    const products = await Product.findAll()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  } catch (error) {
    console.log(error)
  }
}

export const getProduct = async (
  req: IncomingMessage,
  res: ServerResponse,
  id: string
) => {
  try {
    const product = await Product.findById(id)
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Product Not Found' }))
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(product))
    }
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  try {
    const product = {
      name: 'Test Product',
      description: 'This is my product',
      price: 100,
    }
    const newProduct = await Product.create(product)
    res.writeHead(201, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(newProduct))
  } catch (error) {
    console.log(error)
  }
}
