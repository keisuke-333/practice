import { v4 as uuid } from 'uuid'
import products from '../data/products.json'
import { writeDataToFile } from '../utils'
import { ProductType } from '../types/index'

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const findById = (id: string) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id)
    resolve(product)
  })
}

export const create = (product: Omit<ProductType, 'id'>) => {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuid(), ...product }
    products.push(newProduct)
    writeDataToFile('src/data/products.json', products)
    resolve(newProduct)
  })
}
