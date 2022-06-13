const prisma = require("../utils/prisma");

const createTicket = async (req, res) => {
  const createdTicket = await prisma.ticket.create({
    data: {
      screening: {
        connect: {
          id: 1,
        },
      },
      seats: {
        connectOrCreate: {
          where: {
            id: 1,
          },
          create: {
            number: 1,
            screen: {
              connect: { id: 1 },
            },
          },
        },
      },
      customer: {
        connect: {
          id: 1,
        },
      },
    },
    include: {
      seats: true,
    },
  });

  res.json({ data: createdTicket });
};

module.exports = { createTicket };
