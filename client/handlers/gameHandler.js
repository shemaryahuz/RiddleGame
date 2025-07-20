// Functions for game management

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import ChoiceRiddle from "../models/ChoiceRiddle.js";
import { fetchAllRiddles } from "../services/riddleService.js";
import { createPlayer } from "../services/playerService.js";

function runLevel(riddles, level, player){
    // run level of riddles
    console.log(`\n== Level: '${level}' ==`);
    // initialize riddle and time
    let riddle;
    let time;
    // loop over the riddles to create riddle entity and call ask method from the player entity
    for (let r of riddles){
        // create riddle by type
        if (r.level === "multi-choices"){
            riddle = new ChoiceRiddle(r);
        }
        else{
            riddle = new Riddle(r); 
        }
        // call player.recordScore to save time and score of the current riddle
        player.recordScore(riddle);
    }
}

export async function game(){
    // variable for exit
    const exit = "0";
    // main function for the game
    console.log("\n== Welcome to the Riddle Game ==");
    // intialize player and level by readlin-sync.question
    const player = createPlayer();
    const level = question("\nChoose game level (all/ multi-choices/ easy/ medium/ hard): ").toLowerCase();
    // validate level
    const levels = ["all", "multi-choices", "easy", "medium", "hard"];
    if (!levels.includes(level)){
        console.log("\nlevel is in valid\n");
        return;
    }
    // get all riddles from the server
    const riddles = await fetchAllRiddles();
    let filteredRiddles;
    // if level is 'all', get all riddles
    if (level === "all"){
        filteredRiddles = riddles;     
    }
    else{
        // if level is spesific, filter ridddles by level
        filteredRiddles = riddles.filter(riddle => riddle.level === level);
    }
    // call runLevel method
    runLevel(filteredRiddles, level, player);
    // show player states
    player.showState(filteredRiddles);
}