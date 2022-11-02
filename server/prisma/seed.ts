import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Jhon Doe',
      email: 'john.doe@gmail.com',
      avatarUrl: 'https://github.com/kevinguedes.png',
    },
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: 'BOL123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  })

  await prisma.game.create({
    data: {
      date: '2022-11-02T12:00:00.161Z',
      firstTeamCountryCode: 'DE',
      seconTeamCountryCode: 'BR',
    },
  })

  await prisma.game.create({
    data: {
      date: '2022-11-02T13:00:00.161Z',
      firstTeamCountryCode: 'DE',
      seconTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 3,
          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  })
}

main()
