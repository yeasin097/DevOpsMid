# Stage 1: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the Next.js application
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production

WORKDIR /app

# Copy the built Next.js application
COPY --from=builder /app/.next ./.next

# Copy other necessary files for production
COPY package*.json ./
COPY public ./public
COPY next.config.mjs ./next.config.mjs

# Install only production dependencies
RUN npm install --only=production

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
