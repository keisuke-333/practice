import * as fs from 'fs'
import { IncomingMessage } from 'http'
import { ProductType } from './types/index'

export const writeDataToFile = (
  fileName: fs.PathOrFileDescriptor,
  content: ProductType[]
) => {
  fs.writeFileSync(fileName, JSON.stringify(content))
}

export const getPostData = (req: IncomingMessage): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}
