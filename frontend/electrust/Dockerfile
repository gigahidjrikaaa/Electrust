FROM  node:20-alpine3.17 AS builder 
WORKDIR /app 
# COPY package.json . 
COPY . .
RUN npm install  
RUN npm run build

FROM nginx:1.25.2-alpine-slim 
 
COPY --from=builder /app/dist/comp-lib /usr/share/nginx/html
 
EXPOSE 80 
 
CMD ["nginx", "-g", "daemon off;"] 
