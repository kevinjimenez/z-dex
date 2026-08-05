import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: z.string().url(),
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: z.string().min(1),
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID: z.string().min(1),
});

const parsed = envSchema.safeParse({
  EXPO_PUBLIC_DRAGON_BALL_API_URL: process.env.EXPO_PUBLIC_DRAGON_BALL_API_URL,
  EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID:
    process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID:
    process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
});
if (!parsed.success) {
  throw new Error(`Invalid environment variables: \n${parsed.error.message}`);
}

export const env = {
  dragonBallApiUrl: parsed.data.EXPO_PUBLIC_DRAGON_BALL_API_URL,
  googleWebClientId: parsed.data.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
  googleIosClientId: parsed.data.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
};
