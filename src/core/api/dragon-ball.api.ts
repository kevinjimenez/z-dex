import { env } from '@/config/env';
import axio from 'axios';

export const dragonBallApi = axio.create({
  baseURL: env.dragonBallApiUrl,
});
