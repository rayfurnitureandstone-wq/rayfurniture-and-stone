# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
# paket saja dulu (layer cache)
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
# build
COPY . .
RUN npm run build

# Runtime: static files + Node untuk CMS proxy (port 4321)
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/astro.config.mjs ./astro.config.mjs

EXPOSE 4321
CMD ["npx", "astro", "preview", "--host", "0.0.0.0", "--port", "4321"]
