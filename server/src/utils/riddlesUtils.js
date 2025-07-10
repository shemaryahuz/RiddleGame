// utils functions for riddles
import { getAllRiddles } from "../services/riddleService.js";

export async function generateUniqueId() {
    // get all riddles
    const riddles = await getAllRiddles();
    // initialize variables for loop
    let randomId;
    let isUnique = false;
    while (!isUnique){
        // get random base-36 string and take 3 characters
        randomId = Math.random().toString(36).substring(2, 5);
        // check if random id is in the riddles
        isUnique = !riddles.some(riddle => riddle.id === randomId);
    }
    return randomId;
}