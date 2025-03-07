# Utiliser une image de base Node.js
FROM node:20-alpine

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package.json ./
# COPY package-lock.json ./

# Installer les dépendances
RUN npm i

# Copier le reste de l'application
COPY . .

# Lance le projet en mode dev
CMD ["npm", "run", "start"]
