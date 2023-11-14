import { z } from 'zod';

export const validationSchema = z
  .object({
    firstName: z.string().min(1, { message: 'Firstname is required' }),
    lastName: z.string().min(1, { message: 'Lastname is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    sex: z.string().min(1, { message: 'Sex is required' }),
    password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
    passwordAgain: z.string().min(1, { message: 'Confirm Password is required' }),
    // muszaj megadni neki a <boolean> tipust kulonben tipus generalasnak nem boolean hanem true lesz a tipusa.
    agree: z.literal<boolean>(true, {
      errorMap: () => ({ message: 'You must agree with the Terms and Conditions' }),
    }),
  })
  .refine((data) => data.password === data.passwordAgain, {
    path: ['passwordAgain'],
    message: "Password don't match",
  });

export type ValidationSchema = z.infer<typeof validationSchema>;

export const schemFormdefaultValue = {
  firstName: '',
  lastName: '',
  email: '',
  sex: '',
  password: '',
  passwordAgain: '',
  agree: false,
};
