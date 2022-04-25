import products from '../data/products.json'

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
