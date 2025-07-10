// Riddle Game Server

import express from "express";

// initialize express application
const app = express();

// convert all requests body to json
app.use(express.json());


// get the port for running
const PORT = process.env.PORT;

// run the server
app.listen(PORT, (error) => {
    // if there is an error, log to console
    if (error) console.error(`Error running the server: ${error}`);
    // log message that server is running
    console.log(`Server is running at: http://localhost:${PORT}`);
})