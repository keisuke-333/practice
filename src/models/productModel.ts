import products from '../data/products.json'

export const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(products)
  })
}
