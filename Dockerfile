FROM node:20-alpine

WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm install

# Source files will be mounted as volume
EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
