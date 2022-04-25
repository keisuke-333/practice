import * as fs from 'fs'
import { ProductType } from './types/index'

export const writeDataToFile = (
  fileName: fs.PathOrFileDescriptor,
  content: ProductType[]
) => {
  fs.writeFileSync(fileName, JSON.stringify(content))
}
