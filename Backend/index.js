import express from "express";
// DB
import database from './database.js';
// Routes
import postDataRoute from './routes/postData.js';

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);


// Routes
app.use(postDataRoute);

// Middlewares


// Server
app.listen(app.get("port"), () => {
    console.log(`Server is working on port: ${app.get("port")}`);
  }); //this use the port setting
