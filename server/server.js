// Riddle Game Server

import { createServer } from "http";

const PORT = 3000;

const server = createServer();

server.listen(PORT, () => {
    console.log(`Server is running on 'http://localhost:${PORT}'...`);
})