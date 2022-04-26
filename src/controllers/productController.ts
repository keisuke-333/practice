import { IncomingMessage, ServerResponse } from 'http'
import * as Product from '../models/productModel'
import { getPostData } from '../utils'

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
    const body = await getPostData(req)
    const { name, description, price } = JSON.parse(body)
    const product = {
      name,
      description,
      price,
    }
    const newProduct = await Product.create(product)
    res.writeHead(201, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(newProduct))
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async (
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
      const body = await getPostData(req)
      const { name, description, price } = JSON.parse(body)
      const productData = {
        name: name || product.name,
        description: description || product.description,
        price: price || product.price,
      }
      const updProduct = await Product.update(id, productData)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(updProduct))
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteProduct = async (
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
      await Product.remove(id)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: `Product ${id} removed` }))
    }
  } catch (error) {
    console.log(error)
  }
}
