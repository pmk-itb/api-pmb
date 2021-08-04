import { createHmac, randomBytes } from 'crypto';
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.body;
  let { password } = req.body;

  const salt = randomBytes(16).toString('base64');
  const hash = createHmac('sha512', salt).update(password).digest('base64');
  password = salt + '$' + hash;

  await prisma.admin.create({
    data: {
      username,
      password,
    },
  });

  res.status(201).send(`Created username: ${username}`);
};
