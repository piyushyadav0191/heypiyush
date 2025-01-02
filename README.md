![Portfolio](https://github.com/user-attachments/assets/75349cda-0b05-4f6c-bbca-d982afdd4c48)


Welcome to my personal Portfolio repository! This repository houses the code for my portfolio website. Feel free to explore and get inspired.

## ✨ Features

- ⚡️ Next.js 15 (App Router)
- 🤖 AI powered Bot
- 👆 Redis
- 📝 MDX + Contentlayer
- 🎨 Tailwind CSS - for styling
- 🌈 Radix UI - accessible UI components
- 📱 Responsive design
- 🌗 Dark mode
- 📈 SEO optimized with meta tags and JSON-LD
- 📰 RSS feed
- ✅ Pagination - Guestbook
- 🗺 Sitemap
- 🔎 Blog post search
- 🎨 Animation - using Framer Motion
- 🏠 Page Insights - 98 Performance, 94 Accessibility, 100 SEO
- 🔒 NextAuth.js - authentication
- ◮ Prisma - ORM
- 👷🏻‍♂️ t3-env - validate environment variables before building

## 👋 Getting Started

Follow these steps to run the project locally on your machine:

```bash
git clone https://github.com/piyushyadav0191/heypiyush.git && cd heypiyush
bun i 
```

Create a `.env` file based on the provided `.env.example` file and fill in the necessary variables.


- Run `bun run generate && npx prisma db push` on your terminal

- run app on local host by running `bun run dev`

The app will become available at `http://localhost:3000`.

## 🐳 Docker Configuration

To build and run the project using Docker, follow these steps:

1. Build the Docker image:

```bash
docker build -t nextjs-app .
```

2. Run the Docker container:

```bash
docker run -p 80:80 nextjs-app
```

## AI Chatbot Configuration

1. Obtain your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Replace my data with your data in `src/texts/info.txt`.
3. Replace my name with yours on line 78 in `src/app/api/chat/route.ts`.
4. Run the following command to generate:  
   ```bash
   bun run generate
   ```

## Vercel Deployement
- Push your all .env variables on github before building the project
- Replace your Deployment url in .env variable named NEXTAUTH_URL

## Sites where you will get .env variables
- `DATABASE_URL`: Get this from services like Railway.app, Supabase, Neon.tech, or any PostgreSQL provider.
- `GOOGLE_API_KEY`: Obtain your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
- `PINECONE_API_KEY`: Get your API key from [Pinecone](https://app.pinecone.io/).
- `PINECONE_INDEX_NAME`: Specify your index name from [Pinecone](https://app.pinecone.io/).
- `UPSTASH_REDIS_REST_URL`: Retrieve the REST URL from [Upstash Redis Console](https://console.upstash.com/redis).
- `UPSTASH_REDIS_REST_TOKEN`: Retrieve the REST token from [Upstash Redis Console](https://console.upstash.com/redis).
- `SPOTIFY_CLIENT_ID`: Provide your Spotify client ID.
- `SPOTIFY_CLIENT_SECRET`: Provide your Spotify client secret.
- `SPOTIFY_REFRESH_TOKEN`: Provide your Spotify refresh token.
- `NEXTAUTH_SECRET`: Example secret: `piyushisverycool`.
- `NEXTAUTH_URL`: URL for your NextAuth instance, e.g., `http://localhost:3000`.
- `OAUTH_CLIENT_KEY`: Your OAuth client key (e.g., for GitHub).
- `OAUTH_CLIENT_SECRET`: Generate the OAuth client secret from [GitHub Developer Settings](https://github.com/settings/developers) after creating an OAuth app.

