import {createEnv} from "@t3-oss/env-nextjs"
import {z} from "zod"

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(5),
    GOOGLE_API_KEY: z.string().min(5),
    ASTRA_DB_ENDPOINT: z.string().min(5),
    ASTRA_DB_APPLICATION_TOKEN: z.string().min(5),
    ASTRA_DB_COLLECTION: z.string().max(15),
    UPSTASH_REDIS_REST_URL: z.string().min(5),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(5),
    SPOTIFY_CLIENT_ID: z.string().min(5),
    SPOTIFY_CLIENT_SECRET: z.string().min(5),
    SPOTIFY_REFRESH_TOKEN: z.string().min(5),
    NEXTAUTH_SECRET: z.string().min(5).max(15),
    NEXTAUTH_URL: z.string().min(5).url(),
    OAUTH_CLIENT_KEY: z.string().min(5),
    OAUTH_CLIENT_SECRET: z.string().min(5),
  },
  client: {},
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    ASTRA_DB_ENDPOINT: process.env.ASTRA_DB_ENDPOINT,
    ASTRA_DB_APPLICATION_TOKEN: process.env.ASTRA_DB_APPLICATION_TOKEN,
    ASTRA_DB_COLLECTION: process.env.ASTRA_DB_COLLECTION,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    OAUTH_CLIENT_KEY: process.env.OAUTH_CLIENT_KEY,
    OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
  },
});