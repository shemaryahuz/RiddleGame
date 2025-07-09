// Riddle Game Server

import { createServer } from "http";
import { getRiddles } from "./src/services/riddleService.js";

const PORT = 3000;

const server = createServer();

// call listen method to run server on localhost
server.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'...`);
});

server.on("request", async (req, res) => {
    try{
        switch(req.url){
            // handle response according to the request's url path

            case "/riddles":
                // if the request's url is with '/riddles', send all riddles
                const riddlesArr = await getRiddles();
                const riddlesStr = JSON.stringify(riddlesArr);
                res.end(riddlesStr);

            case "/addRiddle":
                // if the request's url is with '/addRiddle', add riddle
                if (req.method.toUpperCase() === "POST"){
                    
                }
            
            default:
                // if the request's url is the default path, response with message that the server is running
                res.end("Server is running...");
        }
    }
    catch(err){
        // if there is an error, log to the console and response with the error;
        console.error(err);
        res.end(err);
    }
})