# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# # Build the React app
# RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the React app using the npm start command
CMD [ "npm", "start" ]

# si3mshady/weatherapp-matrix:1
# si3mshady/weatherapp-spiderman:1
#si3mshady/weatherapp-wizkalifa:1
