FROM node:18-alpine

WORKDIR /app

COPY App.js .

EXPOSE 3000

CMD ["node", "App.js"]
