// Service for handling with riddles

import { readRiddels } from "../dal/riddleDAL.js";

export async function getRiddles(){
    try{
        // get all riddles as json string
        const riddlesStr = await readRiddels();
        // return array of the riddles
        return JSON.parse(riddlesStr);
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error parse riddles string to an array: ${err}`);
    }
}