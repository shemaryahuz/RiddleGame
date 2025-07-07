// Riddle Game Server

import { createServer } from "http";
import { getRiddels } from "./src/services/riddleService.js";

const PORT = 3000;

const server = createServer();

// call listen method to run server on localhost
server.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'...`);
});

server.on("request", async (req, res) => {
    switch (req.url){
        case "/":
            // if the request'url is the default path, response with message that the server is running
            res.end("Server is running...");
        case "/riddles":
            // if the request'url is whith '/riddles'
            const riddlesArr = await getRiddels();
            res.end(JSON.stringify(riddlesArr));
    }
})