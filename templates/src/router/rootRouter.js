// Creating root router for the application
import express from "express";

// router from user routes
import userRouter from "./userRouter";

// initializing the express router
const rootRouter = express.Router();

/*
This file is the root router for the application
This is where all the routes are defined and the main root router is exported
*/

// get all the router from the application
rootRouter.use("/user", userRouter);

export default rootRouter;
