// Service for handling with riddles

import { readRiddles, writeRiddles } from "../dal/riddleDAL.js";

export async function getAllRiddles(){
    try{
        // get all riddles as json string
        const riddlesStr = await readRiddles();
        // return array of the riddles
        return JSON.parse(riddlesStr);
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error parsing riddles to an array: ${err}`);
    }
}

export async function addRiddle(riddle){
    try{
        const riddles = await getAllRiddles();
        riddles.push(riddle);
        await writeRiddles(riddles);
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error writing riddles to the data: ${err}`);
    }
}