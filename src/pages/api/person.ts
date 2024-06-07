import { PrismaClient, User } from '@prisma/client';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getPerson = async (user: User | null): Promise<void> => {
  if (!user) return;
  
  switch (user.name) {
    case "PersonA":
      await sleep(1000);
      break;
    case "PersonB":
      await sleep(3000);
      break;
    case "PersonC":
      return;
    default:
      return;
  }
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const person = req.query.person as string | undefined;

    if (person && typeof person !== 'string') {
      return res.status(400).send('Invalid username');
    }

    let user: User | null = null;
    let users: User[] | null = null;

    if (person) {
      user = await prisma.user.findFirst({
        where: { name: person },
      });
      await getPerson(user);
    } else {
      users = await prisma.user.findMany();
      await Promise.all(users.map(getPerson));
    }

    if (user) {
      res.status(200).json(user);
    } else if (!person && users) {
      res.status(200).json(users);
    } else {
      res.status(404).send("Error: Request failed for Person C");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
