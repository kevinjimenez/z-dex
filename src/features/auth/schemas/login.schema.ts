import { createFormValifator } from '@/utils/create-form-validator';
import z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, 'El username es requerido'),
  password: z.string().min(1, 'El password es requerido'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const validateLogin = createFormValifator(loginSchema);
