// CRUD methods for riddles managment

import Riddle from "../models/Riddle.js";
import { getRiddles } from "../services/riddleService.js";

export async function showAllRiddles(){
    // function to get and show all the riddles
    const riddles = await getRiddles();
    showRiddles(riddles);
}

function showRiddles(riddles){
    // function that gets an array of riddles and log the details to the console
    console.log("All the Riddles of the Riddle Game:");
    let riddle;
    for (let r of riddles){
        riddle = new Riddle(r);
        console.log("level:", riddle.level);
        console.log("id:", riddle.id);
        console.log("name:", riddle.name);
        console.log("question:", riddle.question);
        console.log("answer:", riddle.answer);
    }
}