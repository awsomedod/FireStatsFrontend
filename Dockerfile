# Dockerfile

# ---- Stage 1: Build ----
# Use a Node.js image to build the application
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and lock file (if available)
COPY package*.json ./

# Install dependencies
# Use 'ci' for cleaner installs, especially in CI environments
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
# Vite builds output to the 'dist' folder by default
RUN npm run build

# ---- Stage 2: Production ----
# Use a lightweight Nginx image to serve the static files
FROM nginx:1.23-alpine

# Copy the built artifacts from the 'builder' stage
# Vite outputs to 'dist' by default
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration (optional but recommended for SPAs)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Nginx default)
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]