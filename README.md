# express-starter
Instructions for setting up an express server in Node.js and deploying the server to Heroku

## App setup
1. Create a `server.js` file
2. Create a package.json with `npm init -y`
3. Run `npm install express`.  Confirm by seeing `node_modules` folder and `package-lock.json`

## Build the server
1. Require express
    ```
    const express = require("express");
    ```
2. Create an instance of express
    ```
    const app = express();
    ```
3. Create a port to listen on (if deploying to Heroku, use process.env.PORT as an option)
    
4. Listen on the port
    ```
    app.listen(PORT, () => {
        console.log("Server is running on http://localhost:" + PORT);
    });
    ```
5. Add middleware.  
    This sets up express to parse the request body
    ```
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    ```
    This sets the web root to the public folder
    ```
    app.use(express.static(__dirname + "/public"));
    ```

6. Add routes

## Start the server
Your `package.json` should have a start script.  You can run it by executing `npm start` in the terminal.

## Deploying your server to Heroku

