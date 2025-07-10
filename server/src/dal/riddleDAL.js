// Data access layer for riddles

import fs from "fs/promises";

// initialize path to riddles.txt (relative to server.js - the main running file)
const PATH = "./data/riddles.txt";

export async function readRiddles(){
    try{
        // read all riddles from riddles.txt
        return await fs.readFile(PATH, 'utf-8');
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error reading riddles: ${err}`);
    }
}

export async function writeRiddles(riddles){
    try{
        // write updated riddles to riddles.txt
        return await fs.writeFile(PATH, riddles, 'utf-8');
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error writing riddles: ${err}`);
    }
}