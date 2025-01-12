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
- React.js: A JavaScript library for building user interfaces, focusing on creating reusable components and managing state effectively for dynamic applications.
 ```javascript
 import React from "react";

 function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}
```

----
```javascript
function Note() {
  return (
    <div className="note">
      <h1>Title</h1>
      <p>Content</p>
    </div>
  );
}

export default Note;
```
 
- Next.js: A React framework for building server-rendered or statically generated applications, with features like optimized routing, image handling, and built-in support for SEO.
```javascript
// pages/index.js

import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is the homepage of a basic Next.js app.</p>
    </div>
  );
};

export default Home;

// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API Route!' });
}


```
- Tailwind CSS: A utility-first CSS framework offering pre-designed classes to quickly build custom designs without writing custom CSS.
   - Note: Using Tailwind CSS can lead to a lot of code duplication, so it's a good idea to have these stylinsg in their own React Components. Here's an example:
```javascript
// components/Badge.js
import React from 'react';

const Badge = ({ count }) => {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
      {count}
    </span>
  );
};

export default Badge;

// pages/index.js
import React from 'react';
import Badge from '../components/Badge';

const Home = () => {
  return (
        <p>Notifications: <Badge count={204} /></p>
  );
};

export default Home;
```
- TypeScript: A superset of JavaScript that introduces static typing, improving code maintainability and reducing bugs through type checks. Steeper learning curve, but more payoff in the long run.
   - here's a brief example of why TypeScript:
     | JavaScript  | TypeScript |
     | ------------- | ------------- |
     | ![image](https://github.com/user-attachments/assets/4b8b6125-50be-4623-993b-e2f8f3f052d0)| ![image](https://github.com/user-attachments/assets/327dc2ef-8b61-4317-9cb3-61109d977fb3)|
     | As you can see, JS doesn't highlight any of these errors before the code is executed.  | TypeScript, on the other hand, catches the errors **before** you run any code.  |

     If you tried using the above JS code in TypeScript, you'd get errors like this:
     ![image](https://github.com/user-attachments/assets/6acc7619-dbf5-4f9f-ad53-af05bab84077)
     
## Backend
- PostgreSQL: A relational database known for its advanced features, scalability, and support for complex queries and JSON data.
- Node.js: A JavaScript runtime that enables server-side (backend) development for efficient and scalable applications.
## APIs
- Firebase: A platform by Google providing backend services like real-time databases, authentication, and hosting for fast development.
- KeepTheScore: A service for tracking and visualizing scores or statistics, often used in real-time applications like games or leaderboards.
- ElasticSearch: A distributed search engine optimized for full-text search, log analytics, and handling large volumes of data.
## Other Tools
- Express.js
   - Example: A lightweight Node.js framework for building APIs and web applications, simplifying routing and middleware handling.
```javascript
import express from "express"; 
const app = express(); 
const port = 3000;

app.use((req, res, next) => { ....; next();}


app.get("/", (req, res) => {
    res.send('you got it!');
})

app.get("/about", (req, res) => {
    res.send("<h1>Hi!</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Go away</h1>")
})

app.listen(port, 
    () => {
        console.log(`Test on port ${port}`);
    }
)
```

- Axios: A promise-based HTTP client for Node.js, simplifying HTTP requests and responses with built-in JSON handling and interceptors. Often used for interactions with APIs.

```javascript

import axios from "axios";

app.get("/", (req, res) => {
  res.render(__dirname + "\\views\\index.ejs", {curRec:record, curCount:count, firstTime:true});
});

app.post("/start", async (req, res) =>{
    try {
        const jokeRes = await axios.get(API_URL + "/Any");
        let jokeType = jokeRes.data.type;
        ...
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
    
})


app.post("/keep-streak", async (req, res) =>{
    try {
        count++;
        const jokeRes = await axios.get(API_URL + "/Any");
        let jokeType = jokeRes.data.type;
        let jokeContent = new Array();
        if (jokeType === "single"){
            jokeContent.push(jokeRes.data.joke);
        }
        else{
            jokeContent.push(jokeRes.data.setup);
            jokeContent.push(jokeRes.data.delivery);
        }
        res.render(__dirname + "\\views\\index.ejs", {curRec:record, curCount:count, joke: jokeContent});
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
})
```
