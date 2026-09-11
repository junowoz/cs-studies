# What is Docker?

Makes developing and deploying apps easier. It packages full apps in containers so we can share 
them easier. Before this, devs needed to install and configure all services directly in on their 
OS, making this process very time consuming and error prone. Installation process is different 
for each OS environment. This approach had manu steps, where things could go wrong. If your app 
used 10 services, each dev had to install those 10 services.

Docker isolates environments, so we don't have to install everything independently. Docker 
standardizes process of running any service on any local dev environment.
It makes easy to run different versions of same app without any conflicts.

The deployment process was very manual, where devs had to read installation instructions and had 
to do everything. Then they sent all to the Operations team (devOps) and then they did the 
deploy. This was very time-consuming, you could had dependencies conflicts, miscommunications 
between teams (since everything was on a textual guide of deployment), human errors could happen.

With container this process is simplified, because all the configurations are packed inside the 
Docker artifact, so no config needed on the server, and you have less room for errors.

All the devops have to do is to run the docker command to fetch and run the docker artifacts, 
install the docker runtime on the server, but that's just a one time effort.

## Virtual Machines vs Docker Containers (Virtualization Tool)

OS have two main layers. The layer and OS App layer. The kernel communicates with the hardware. 
This is the core of the OS and interacts between hardware and software components.

The OS App layer is where we have all the apps, like Chrome, Spotify, etc.

Docker virtualizes the OS App layer, while Virtual Machines virtualizes the entire OS. So 
services and apps installed on top of that layer are virtualized and it simply uses de host OS 
kernel.

- VM -> Whole new OS
    - Bigger
    - Takes minutes to start
    - Is compatible with all OS
- Docker -> OS App layer
    - Smaller
    - Faster to start
    - Only compatible with Unix
    - Most containers are based on Linux

## Docker Images, Registries and Containers

### Docker Images and Containers

- Image: Immutable template that defines how a container will be realized. So, docker allows to 
  save files into an Artifact Repository, so they can be easily shared and moved, like a zip or jar file, moved to the server.
  The package produced with docker is called a Docker Image, which has info about the App, the OS 
  layer, and any other services needed, like node, npm, etc. We can also add environment variables,
  create directories, files, etc. we save all that in an IMAGE.
- Container: A running instance of an image. That's when the container environment is created. 
  For a single image you can run multiple containers. Each container is isolated from each other.

Now, it's clear that we get containers from images, but where do we get images from?

### Docker Registry

These are storages and distributions of docker images, by enterprises. We have official images 
from Redis, Mongo, Postgres, etc. Official images are maintained by the company.
In docker hub we can find images from the community, which are not maintained by the company.
You can find docker images here: [Docker Hub](https://hub.docker.com)

### Image Versioning

Images can have many versions, and they are identified by tags. The default tag is latest. The 
newest release.

## Commands

`docker images`: a list of images I have locally
`docker ps`: list running containers
`docker pull nameImage:tag`: download image from registry
