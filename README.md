# Konektado
FIP 2024-25

# Welcome
Greetings to all developers, and welcome to the repository for CodeBytes. This is where our code will be hosted, and where you'll be doing most of your work.

# Getting Started
**NOTE**: This guide assumes you are using the [Visual Studio Code](https://code.visualstudio.com/) IDE. If you haven't already, go ahead and install it. 

## Docker

To start, we'll need to install Docker, a software application that lets you deploy software in "containers". In summary, using Docker means you don't have to reinstall dependencies if you happen to work from multiple devices; just load up the container, and you'll be good to go. 

If you'd like to know more about Docker, please view the following links:

 - [Docker in 100 seconds](https://www.youtube.com/watch?v=Gjnup-PuquQ) 
 - [100+ Docker Concepts you Need to Know](https://www.youtube.com/watch?v=rIrNIzy6U_g) 
 - [Docker: Get Started](https://docs.docker.com/get-started/) </li>

 ### [Install Docker](https://docs.docker.com/get-started/get-docker/) (follow the steps provided in this link)

## How to use it: 

To create the container for the first time, run the following command in the terminal:
```
docker-compose up
```

Once you've ran this command, the container should be available for you. Going forward, unless you want to do a fresh reinstall of the container, you won't need to run this command again.

## How to start working in the container

1. Open Docker Desktop (NOTE: this **must** be open before you can access the container, since Docker Engine (what powers the container) is ran via this app.
2. Install the [Official Microsoft Docker Extension for VS Code ](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker). This is how you'll open the container in a VS Code window.
3. On the left side of your VS Code window, you should see this whale icon: ![image](https://github.com/user-attachments/assets/bcc43011-203a-4ec5-adb8-13b6e4d933f8).
4. Click the icon, and you should see this menu: ![image](https://github.com/user-attachments/assets/e8fd86ea-8f09-4525-8ae1-4df66e3db589) 
5. Right-click on ```codebytes-app```, then select the ```Attach Visual Studio Code``` option.
6. This will open a brand new window inside the container. To verify that this new window is successfully attached to the container, check that you see this in the bottom-left corner:![image](https://github.com/user-attachments/assets/64ccaab0-0ddf-49eb-b546-d5a239f72060)
7. Within this new window, pull up a terminal (which should have a prompt that looks like this: ```root@7a0234bb2891:~/codebytes#```. This is where your files can be found, and where you'll be doing most of your work.
   a. If it doesn't, simply run ```cd /root/codebytes``` and you should be in the right place.

Congratulations - you've now officially set up the docker environment. 

### Brief Aside: Useful VS Code Extensions
VS Code comes with a whole marketplace of useful extensions, and I've personally found some of these to be useful when developing. Here's a list of some extensions you may find useful:
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [PostgreSQL Management Tool](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)
- [Official PostgreSQL Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-postgresql)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [project-tree](https://marketplace.visualstudio.com/items?itemName=zhucy.project-tree)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [HTML5 Boilerplate](https://marketplace.visualstudio.com/items?itemName=sidthesloth.html5-boilerplate)
- [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=YoavBls.pretty-ts-errors)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [React ES7+](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  


# Breakdown of the Stack

Here's a (very brief) breakdown of our tech stack.

## Frontend
- React.js
- Next.js
- Tailwind CSS
- TypeScript
## Backend
- PostgreSQL
- Node.js
## APIs
- Firebase
- KeepTheScore
- ElasticSearch
## Other Tools
- Express.js
- Axios
