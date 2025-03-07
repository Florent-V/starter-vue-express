# Étape de build
FROM node:20-alpine AS build-stage

ARG VITE_API_BASE_URL
ARG VITE_CLIENT_DOCKER_PORT
ARG VITE_ENV

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN echo "VITE_API_BASE_URL: $VITE_API_BASE_URL"
COPY . .

ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
ENV VITE_CLIENT_DOCKER_PORT=${VITE_CLIENT_DOCKER_PORT}
ENV VITE_ENV=${NODE_ENV}

RUN npm run build

# Étape de production
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5050
CMD ["nginx", "-g", "daemon off;"]
