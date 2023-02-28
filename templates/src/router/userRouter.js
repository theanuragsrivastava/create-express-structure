// import the necessary modules
import express from "express";

// importing necessary controllers and middleware
import * as userController from "../controllers/userController.js";
import * as validator from "../middlewares/userValidator.js";

// initialize the express router
const userRouter = express.Router();

userRouter.post(
  "/create-user",
  validator.createUserValidator,
  userController.createUser
);

userRouter.get("/get-all-user", userController.getAllUser);

userRouter.get(
  "/get-single-user/:email",
  validator.singleUserValidator,
  userController.getOneUser
);

userRouter.delete(
  "/delete-user/:email",
  validator.deleteUserValidator,
  userController.deleteUser
);

export default userRouter;
