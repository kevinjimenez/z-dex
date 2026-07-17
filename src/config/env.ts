import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: z.string().url(),
});

const parsed = envSchema.safeParse({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: process.env.EXPO_PUBLIC_DRAGON_BALL_API_URL,
});
if (!parsed.success) {
  throw new Error(`Invalid environment variables: \n${parsed.error.message}`);
}

export const env = {
  dragonBallApiUrl: parsed.data.EXPO_PUBLIC_DRAGON_BALL_API_URL,
};
