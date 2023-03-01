// importing dependencies
import mongoose from "mongoose";

// requiring app and mongoose connection string
import { mongoDbUrl } from "./config/db.js";
import app from "./app";

// setting port
const PORT = process.env.PORT || 8000;

// connecting to database
// mongoose.connect(mongoDbUrl, (err) => {
//   if (err) throw err;
//   console.log("Database connected");
// });

// starting the server
app.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
});
