import { PrismaClient } from '@prisma/client'

import { linkDatas } from './data/linkDatas'

const prisma = new PrismaClient()

const main = async () => {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      role: 'ADMIN',
    },
  })

  await prisma.link.createMany({
    data: linkDatas,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
