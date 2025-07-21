import bcrypt from 'bcryptjs';
import prisma from '../config/db.js';
import jwt from 'jsonwebtoken';

const register = async ({ email, password, name }) => {
  const hashed = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { email, password: hashed, name },
  });
};

const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return { token };
};

export { register, login };
