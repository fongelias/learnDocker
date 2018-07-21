# learnDocker
repository for learning docker

## Basic Concepts
### Dockerfile
A `Dockerfile` containst commands a user would call on the command line to assemble an image.

Running `docker build [context]` on the command line builds an image from a `Dockerfile` and a context (PATH, a local directory or URL, a git repo location)

#### Building and running an image from a Dockerfile
`docker build -t [name:tag] [context]` can be used to build an image with the name:tag specified from a dockerfile.

`docker run -p [host port: container port] -ti [name:tag]` can be used to run the built image and publish the container's port to the host

### docker-compose.yml
This file allows us to use `docker-compose` to orchestrate containers. This way, you can start all dependencies using one command.