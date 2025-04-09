# Base image
FROM node:18-alpine

# Backend setup
WORKDIR /app/backend
COPY backend/package*.json ./ 
RUN npm install
COPY backend ./ 
# Frontend setup
WORKDIR /app/frontend
COPY frontend/package*.json ./ 
RUN npm install
COPY frontend ./

# Exclude unnecessary files
RUN rm -rf .next

# Environment variables
ENV NEXT_PUBLIC_API_URL=http://localhost:5000
ENV DATABASE_URL=postgres://postgres:postgres@db:5432/app_db
ENV ELASTICSEARCH_URL=http://elasticsearch:9200
ENV FIREBASE_API_KEY=${FIREBASE_API_KEY}
ENV FIREBASE_AUTH_DOMAIN=${FIREBASE_AUTH_DOMAIN}
ENV FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}
ENV FIREBASE_STORAGE_BUCKET=${FIREBASE_STORAGE_BUCKET}

# Expose ports
EXPOSE 3000 5000

# Start services in parallel
CMD ["sh", "-c", "cd /app/backend && npm start & cd /app/frontend && npx next dev"]
