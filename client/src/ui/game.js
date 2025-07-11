// Functions for game management

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import ChoiceRiddle from "../models/ChoiceRiddle.js";
import { fetchAllRiddles } from "../services/riddleService.js";
import { createPlayer } from "../services/playerService.js";

function runLevel(riddles, player){
    // run level of riddles

    // initialize riddle and time
    let riddle;
    let time;
    // loop over the riddles to create riddle entity and call ask method
    for (let r of riddles){
        // create riddle by type
        if (r.level === "multi-choices"){
            riddle = new ChoiceRiddle(r);
        }
        else{
            riddle = new Riddle(r); 
        }
        // call player.recordTime to save time of the current riddle
        time = player.recordTime(() => riddle.ask());
        // add the time to the player's times
        player.times.push(time);
    }
}

export async function game(){
    // variable for exit
    const exit = "0";
    // main function for the game
    console.log("\nStarting the game: ");
    // intialize player and level by readlin-sync.question
    const player = createPlayer();
    const level = question("\nChoose game level (all/ multi-choices/ easy/ medium/ hard): ");

    // get all riddles from the server
    const riddles = await fetchAllRiddles();
    // intialize riddles filtered by level
    let filteredRiddles = riddles.filter(riddle => riddle.level === level);
    // if level is 'all' or invalid level input, get all riddles
    if (filteredRiddles.length === 0){
        filteredRiddles = riddles;
    }
    // call runLevel method
    runLevel(filteredRiddles, player);
    // show player states
    player.showState();
}