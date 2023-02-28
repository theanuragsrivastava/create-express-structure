// Creating root router for the application
import express from "express";

// router from user routes
import userRouter from "./userRouter";

// initializing the express router
const rootRouter = express.Router();

// get all the router from the application
rootRouter.use("/user", userRouter);

export default rootRouter;
