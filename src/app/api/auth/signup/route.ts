import prisma from '@/lib/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password, name } = await req.json();
  const isUserExists = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { name }],
    },
  });

  if (isUserExists)
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });

  const { id } = await prisma.user.create({
    data: {
      name,
      email,
      password: await hash(password, 10),
    },
  });

  return NextResponse.json({ user: { id, name, email } }, { status: 201 });
}
