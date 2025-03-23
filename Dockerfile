# Setup stage
FROM node:20-slim AS setup

WORKDIR /app

COPY . .

# Development stage
FROM node:20-slim AS development

WORKDIR /app

COPY --from=setup /app /app

RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM node:20-slim AS production

WORKDIR /app

RUN npm install -g vite

COPY --from=setup /app /app

RUN npm ci

RUN npm run build

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
