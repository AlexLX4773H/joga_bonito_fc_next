# joga_bonito_fc_next
Joga Bonito FC site

Modify your Dockerfile to install pnpm before running pnpm install:
```
# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN pnpm run build

# Use a lightweight production environment
FROM node:18-alpine AS runner
WORKDIR /app

# Install pnpm in the runner stage as well
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js server
CMD ["pnpm", "start"]
```
```
docker build -t nextjs-app .
docker run -p 3000:3000 nextjs-app
```
To run locally:

1. pnpm i
2. pnpm dev
3. pnpm build
4. pnpm run
