# Create Express Structure

This is a package created for node js developers working with express framework to create web backend along with mongodb as database.

This package will help you create the basic structure that developer need to create as a start.

The whole structure is created to follow the best practices of the application.

## What to do after structure creation

### 🚀 Starting The Server

```bash
npm start
```

### 🔗 Connecting with the Database

To connect with the database, you need to add the required configuration in the .env file.
Now in the server.js file uncomment the mongoose connection code and restart the server your server will start running with the database.

### 🧪 Testing the Server

In the postman or browser enter http://localhost:8000/test to test the server

## 📁 Understanding the folder structure

### Base files

Starting with server.js file, this will only handle the starting and stopping of the server and handling the connection of database.

Coming on the app.js file, here all the package initialization and configuration of the application will be executed also the root router will be initialized here. And this file will be default exported and imported in the server.js file.

In the .env file, all the secrets will be present. Along with the environment variables.
In the .gitignore file, all the important secret files like .env and folder like node_modules that should not be uploaded to the git repository will be included here.

In the config folder, all the files regarding the configuration will be stored like db.js, firebase.json and credentials.json.

The src folder will contain all the folder and files regarding the application.

### src files and folders

In the controller folder all the files regarding business logic will be placed.

In the models folder all the files and fuctions that will interact directly with the database will be placed.

In the middleware folder all the files regarding the validators, verification will be placed.

In the schema folder all the files regarding schema design will be placed.

In the router folder all the route related files will be placed, here the route will be directed to necessary controller.

In the utils folder, all the utility files will be present like commonFunctions, centralized responseMessage and all.

## Final Note

This package is created to help and to speed up process of backend development. And focus on more important logics that is necessary

This folder structure is a preference, If it suits you can use this.

This package is designed for MEN Stack

- Mongodb/Mongoose for Database
- Express for Web Framework
- Node for backend development
