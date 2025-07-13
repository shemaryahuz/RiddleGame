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
        // if there is no level field, add it
        riddle.level = "extra";
        // get all riddles
        const riddles = await getAllRiddles();
        riddles.push(riddle);
        // convert riddles to a json string for writing to a file
        const riddlesStr = JSON.stringify(riddles, null, 2);
        await writeRiddles(riddlesStr);
        return riddle;
    }
    catch(err){
        // if there is an error, log to the console
        console.error(`Error adding riddle: ${err}`);
        return;
    }
}

export async function updateRiddleById(riddleId, newRiddle) {
    try {
        // get all riddles
        const riddles = await getAllRiddles();
        // isExsits bool
        let isExsits = false;
        // loop over the riddles
        riddles.forEach(riddle => {
            // if riddle id found, update with the new riddle
            if (riddle.id === riddleId){
                isExsits = true;
                riddle.name = newRiddle.name;
                riddle.question = newRiddle.question;
                riddle.answer = newRiddle.answer;
                return;
            }
        });
        if (!isExsits){
            // if not found, return undefined
            return;
        }
        // convert ridles to a json string for writing to a file
        const riddlesStr = JSON.stringify(riddles, null, 2);
        await writeRiddles(riddlesStr);
        // add the id and level for returning
        newRiddle.id = riddleId;
        newRiddle.level = "extra";
        return newRiddle;
    } catch (error) {
        // if there is an error, log to the console
        console.error(`Error updating riddle: ${error}`);
        return;
    }
}

export async function deleteRiddleById(riddleId) {
    try {
        // get all riddles
        const riddles = await getAllRiddles();
        // found variable
        let found = false;
        // loop over the riddles
        riddles.forEach((riddle, index, riddles) =>{
            // if riddle id found, delete it
            if (riddle.id === riddleId){
                found = true;
                riddles.splice(index, 1);
                return;
            }
        });
        // if not found, return false
        if (!found){
            return false;
        }
        // convert riddles to a json string for writing to a file
        const riddlesStr = JSON.stringify(riddles, null, 2); 
        const deleted = await writeRiddles(riddlesStr);
        // return bool if deleted
        return deleted;
        
    } catch (error) {
        // if there is an error, log to the console
        console.error(`Error deleting riddle: ${error}`);
        return false;
    }
}