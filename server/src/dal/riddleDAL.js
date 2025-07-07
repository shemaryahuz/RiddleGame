// Data access layer for riddles

import fs from "fs/promises";

const PATH = "././data/riddles.txt";

export async function readRiddels(){
    try{
        // read all riddles from riddles.txt
        return await fs.readFile(PATH, 'utf-8');
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error reading riddles: ${err}`);
    }
}