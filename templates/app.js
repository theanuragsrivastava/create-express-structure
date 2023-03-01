// importing dependencies
import express from "express";
import dotenv from "dotenv";

import rootRouter from "./src/router/rootRouter";

// initializing express app
const app = express();

// configuring express
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// get test route
app.get("/test", (req, res) => {
  res.send("Server is up and running");
});

// get all apis from rootRouter
app.use("/api", rootRouter);

export default app;
