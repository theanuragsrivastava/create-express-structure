// importing dependencies
import express from "express";
import mongoose from "mongoose";

// requiring app and mongoose connection string
import { mongoDbUrl } from "./config/db.js";
import app from "./app";

// initializing express server and port
const server = express();
const PORT = process.env.PORT || 5000;

// connecting to database
// mongoose.connect(mongoDbUrl, (err) => {
//   if (err) throw err;
//   console.log("Database connected");
// });

// starting the server
server.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
});
