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
