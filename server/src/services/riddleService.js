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

export async function getRiddle(riddleId) {
    try {
        // get all riddles
        const riddles = await getAllRiddles();
        // loop over the riddles
        for (let riddle of riddles){
            // if riddle found, return it
            if (riddle.id === riddleId){
                return riddle;
            }
        }
        // if not found, return undefined
        return;
    } catch (error) {
        // if there is an error, log to the console
        console.error(`Error getting riddle: ${error}`);
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
        const added = await writeRiddles(riddlesStr);
        return added;
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error adding riddle: ${err}`);
        return false;
    }
}

export async function updateRiddle(riddleId, newRiddle) {
    try {
        // add unique id to the new riddle
        newRiddle.id = await generateUniqueId();
        // get all riddles
        const riddles = await getAllRiddles();
        // loop over the riddles
        for (let i = 0; i < riddles.length; i++){
            // if riddle id found, update with the new riddle and return true if updated
            if (riddles[i].id === riddleId){
                riddles[i] = newRiddle;
                // convert ridles to a json string for writing to a file
                const riddlesStr = JSON.stringify(riddles, null, 2);
                const updated = await writeRiddles(riddlesStr);
                return updated;
            }
        }
        // if not found, return false
        return false;
        
    } catch (error) {
        // if there is an error, log to the console
        console.error(`Error updating riddle: ${error}`);
        return false;
    }
}

export async function deleteRiddle(riddleId) {
    try {
        // get all riddles
        const riddles = await getAllRiddles();
        // loop over the riddles
        for (let i = 0; i < riddles.length; i++){
            // if riddle id found, delete and return true if deleted
            if (riddles[i].id === riddleId){
                riddles.splice(i, 1);
                // convert ridles to a json string for writing to a file
                const riddlesStr = JSON.stringify(riddles, null, 2); 
                const deleted = await writeRiddles(riddlesStr);
                return deleted;
            }
        }
        // if not found, return false
        return false;
        
    } catch (error) {
        // if there is an error, log to the console
        console.error(`Error deleting riddle: ${error}`);
        return false;
    }
}