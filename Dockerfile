# Step 1: Build the React Vite app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the source code
COPY . ./

# Run TypeScript checks (optional, can be removed)
RUN npx tsc --noEmit

# Build the React Vite app
RUN npm run build

# Step 2: Use Nginx to serve the static files
FROM nginx:alpine AS serve

# Copy built files from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
