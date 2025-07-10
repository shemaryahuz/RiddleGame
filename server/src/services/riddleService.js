// Service for handling with riddles
import { generateUniqueId } from "../utils/riddlesUtils.js"
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
        // add unique id to the riddle
        riddle.id = await generateUniqueId();
        // get all riddles
        const riddles = await getAllRiddles();
        riddles.push(riddle);
        // convert ridles to a json string for writing to a file
        const riddlesStr = JSON.stringify(riddles, null, 2);
        return await writeRiddles(riddlesStr);
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error writing riddles to the data: ${err}`);
        return false;
    }
}

export async function deleteRiddle(riddleId) {
    try {
            // get all riddles
            const riddles = await getAllRiddles();
            // loop over the riddles
            for (let i = 0; i< riddles.length; i++){
                // if riddle found, delete it and update in data
                if (riddles[i].id === riddleId){
                    riddles.splice(i, 1);
                    // convert ridles to a json string for writing to a file
                    const riddlesStr = JSON.stringify(riddles, null, 2);
                    return await writeRiddles(riddlesStr);
                }
            }
            // if not found, return false
            return false;
    } catch (error) {
        
    }
}
