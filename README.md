![create express app](./create-express-app-logo.png)

# Create Express Structure

This is a package created for node js developers working with express framework to create web backend along with mongodb as database.

This package will help you create the basic structure that developer need to create as a start.

## Quick Start

Install and create folder structure

```bash
  npx create-express-app
```

Start the server

```bash
  npm start
```

## Folder Structure

Your express folder structure will be created in the following format

```
├── config
│   ├── db.js
├── src
│   ├── controllers
│   │   ├── userController.js
│   ├── middlewares
│   │   ├── userValidator.js
│   ├── models
│   │   ├── userModel.js
│   ├── router
│   │   ├── userRouter.js
│   │   ├── rootRouter.js
│   ├── schemas
│   │   ├── userSchema.js
│   ├── utils
│   │   ├── catchAsyncErrors.js
│   │   ├── commonFunctions.js
│   │   ├── helperFunction.js
│   │   └── responseMessages.js
├── public
├── app.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are always welcome!

- [Connect Here](letsconnect@anuragsrivastav.com)
