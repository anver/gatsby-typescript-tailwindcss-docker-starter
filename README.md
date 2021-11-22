## 🚀 Quick start

1.  **Build docker image.**

    build the docker image by running the command in root directory

    ```shell
    # create a new Gatsby site using the minimal starter
    docker build -t gatsby-node .
    ```

2.  **Copy node_modules to host machine.**

    Run the following commands to copy node_modules folder into host machine

    ```shell
    docker create -it --name dummy gatsby-node
    docker cp dummy:/app/node_modules ./
    docker rm -f dummy
    ```

    This will copy the node_modules from the newly created image into the
    host machine, in this case the node_modules folder inside the image into
    host machines current directory, and the last command will delete the dummy
    container, make sure you are in the root directory of the project when you run this command.

3.  **Finally create the gatsby container in detached mode**

    ```shell
    docker run -d -p 8000:8000 --name gatsby -v $(pwd):/app gatsby-node
    ```

    make sure your newly created container is up and running by executing

    ```shell
    docker ps -a | grep 'gatsby'
    ```

    This will show you all about ports and the status of the container, incase
    something goes wrong run

    ```shell
    docker logs gatsby
    ```
    
    to check the logs and see what went wrong

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.tsx/index.js` to see your site update in real-time!


4.  **Adding new packages**

    During development process there are chances that we require more 
    packages to be added for the development, in that case login 
    interactively into the running container and add the packages like so

    ```shell
    docker exec -it container_name sh
    yarn add package_name
    ```

5.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
