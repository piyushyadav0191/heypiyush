![Portfolio](https://i.ibb.co/qmqwYqN/main.png)

Welcome to my personal Portfolio repository! This repository houses the code for my portfolio website. Feel free to explore and get inspired.

## ✨ Features

- ⚡️ Next.js 13.5.2 with App Router
- 🤖 AI powered Bot
- 👆 Redis
- 📝 MDX + Contentlayer
- 🎨 Tailwind CSS - for styling
- 🌈 Radix UI - accessible UI components
- 📚 JSDoc comments for all functions
- 📱 Responsive design
- 🌗 Dark mode
- 📈 SEO optimized with meta tags and JSON-LD
- 📰 RSS feed
- ✅ Pagination - Guestbook
- 🗺 Sitemap
- 🔎 Blog post search
- 🎨 Animation - using Framer Motion
- 🏠 LightHouse score of nearly 100
- ☂️ Codecov - code coverage
- 🔒 NextAuth.js - authentication
- ◮ Prisma - ORM
- 👷🏻‍♂️ t3-env - validate environment variables before building

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

```bash
git clone https://github.com/piyushyadav0191/heypiyush.git && cd heypiyush
pnpm i
```

Create a `.env` file based on the provided `.env.example` file and fill in the necessary variables.

```bash
Run bun run generate && npx prisma db push on your terminal
```

The app will become available at `http://localhost:3000`.

## AI Chatbot configuration
- Get your Gemini API from here `https://aistudio.google.com/app/apikey`
- Replace your Data with my Data present in src/texts/info.txt
- Replace my Name with yours on Line no. 78 in src/app/api/chat/route.ts
- Run `bun run generate`

## Vercel Deployement
- Push your all .env variables on github before building the project
- Replace your Deployment url in .env variable named NEXTAUTH_URL

## Sites where you will get .env variables
- DATABASE_URL="Get from railway.app, supabase, neon.tech or any postgres provision services"
- GOOGLE_API_KEY="https://aistudio.google.com/app/apikey"
- ASTRA_DB_ENDPOINT="https://astra.datastax.com/"
- ASTRA_DB_APPLICATION_TOKEN="https://astra.datastax.com/"
- ASTRA_DB_COLLECTION="embeddings" 
- UPSTASH_REDIS_REST_URL="https://console.upstash.com/redis"
- UPSTASH_REDIS_REST_TOKEN="https://console.upstash.com/redis"
- SPOTIFY_CLIENT_ID=""
- SPOTIFY_CLIENT_SECRET=""
- SPOTIFY_REFRESH_TOKEN=""
- NEXTAUTH_SECRET="piyushisverycool"
- NEXTAUTH_URL="http://localhost:3000"
- OAUTH_CLIENT_KEY="github-client-key"
- OAUTH_CLIENT_SECRET="https://github.com/settings/developers" create Oauth app 
