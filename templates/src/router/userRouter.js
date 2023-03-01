// import the necessary modules
import express from "express";

// importing necessary controllers and middleware
import * as userController from "../controllers/userController.js";
import * as validator from "../middlewares/userValidator.js";

// initialize the express router
const userRouter = express.Router();

/*
Here all the routes for the user are defined.
These all routes are a working example for the express router.
You can add more routes if you like.
Or take reference from the same

Happy Coding!
*/

// route to handle post request of create user
userRouter.post(
  "/create-user",
  validator.createUserValidator,
  userController.createUser
);

// route to handle get request of get all users
userRouter.get("/get-all-user", userController.getAllUser);

// route to handle get request of get one user
userRouter.get(
  "/get-single-user/:userID",
  validator.singleUserValidator,
  userController.getOneUser
);

// route to handle put request of  user
userRouter.put("/update-user/:userID", userController.updateUser);

// route to handle delete request of user
userRouter.delete(
  "/delete-user/:userID",
  validator.deleteUserValidator,
  userController.deleteUser
);

export default userRouter;
