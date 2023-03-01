// creating the variable for the mongodb connection that takes variable
// import env from helper function
import { dbName, dbPassword, dbUserName } from "../src/utils/helperFunction";

export const mongoDbUrl = `mongodb+srv://${dbUserName}:${dbPassword}@anuragprojects.g2lo5jl.mongodb.net/${dbName}?retryWrites=true&w=majority`;
