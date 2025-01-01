# Build stage
FROM --platform=$BUILDPLATFORM node:22-bookworm-slim as build-stage
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Install dependencies including git
RUN apt-get update && apt-get install -y git

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy the built static files from Next.js
COPY --from=build-stage /app/.next/standalone /usr/share/nginx/html
COPY --from=build-stage /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=build-stage /app/public /usr/share/nginx/html/public

# Copy nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]