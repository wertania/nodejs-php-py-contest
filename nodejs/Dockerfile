# syntax=docker/dockerfile:1
FROM node
WORKDIR /
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD ["node", "index.js"]