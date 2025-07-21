import { registerSchema, loginSchema } from '../validations/authValidator.js';
import * as AuthService from '../services/authService.js';

const register = async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await AuthService.register(data);
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);
    const user = await AuthService.login(data);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export { register, login };
