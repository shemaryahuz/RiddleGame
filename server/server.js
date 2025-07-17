// Riddle Game Server

import express from "express";
import configRoutes from "./src/routes/configRoutes.js";
import { fetchRiddle } from "./src/dal/riddleDAL.js";




// initialize express application
const app = express();

// convert all requests body to json
app.use(express.json());

// config all routes in the application
configRoutes(app);

// get the port for running
const PORT = process.env.PORT;

// run the server
app.listen(PORT, (error) => {
    // if there is an error, log to console
    if (error) console.error(`Error running the server: ${error}`);
    // log message that server is running
    console.log(`Server is running at: http://localhost:${PORT}`);
})