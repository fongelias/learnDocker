# start from a base image
FROM node:argon

# make directory and set working directory
RUN mkdir /app
WORKDIR /app

# copy dependency list and download dependencies to working directory
COPY package.json /app
RUN npm install

# copy the rest of the contents into working directory
COPY . /app

# expose port 3000
EXPOSE 3000

# run `npm start` command
CMD ["npm", "start"]
