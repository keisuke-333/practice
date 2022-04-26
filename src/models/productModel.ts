import { v4 as uuid } from 'uuid'
import products from '../data/products.json'
import { writeDataToFile } from '../utils'
import { ProductType } from '../types/index'

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}

export const findById = (id: string): Promise<ProductType | undefined> => {
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

export const update = (id: string, product: Omit<ProductType, 'id'>) => {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id)
    products[index] = { id, ...product }
    writeDataToFile('src/data/products.json', products)
    resolve(products[index])
  })
}

export const remove = (id: string) => {
  return new Promise((resolve, reject) => {
    const Products = products.filter((p) => p.id !== id)
    writeDataToFile('src/data/products.json', Products)
    resolve(products)
  })
}
