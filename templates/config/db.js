// creating the variable for the mongodb connection that takes variable
// from enviroment variables

export const mongoDbUrl = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@anuragprojects.g2lo5jl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
