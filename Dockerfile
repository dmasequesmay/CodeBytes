# Base image
FROM node:16

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
# ENV FIREBASE_API_KEY=${FIREBASE_API_KEY}
# ENV KEEP_THE_SCORE_API_KEY=${KEEP_THE_SCORE_API_KEY}

# Expose ports
EXPOSE 3000 5000

# Start services in parallel
CMD ["sh", "-c", "cd /app/backend && npm start & cd /app/frontend && npx next dev"]
