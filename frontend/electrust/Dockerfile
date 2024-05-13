FROM  node AS builder 
WORKDIR /app 
COPY package.json . 
COPY . .
RUN npm install  
RUN npm run build

FROM nginx:1.25.2-alpine-slim 
 
COPY --from=builder /app/build /usr/share/nginx/html 
 
EXPOSE 80 
 
CMD ["nginx", "-g", "daemon off;"] 
