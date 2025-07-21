// Functions for game management

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import ChoiceRiddle from "../models/ChoiceRiddle.js";
import { fetchAllRiddles } from "../services/riddleService.js";
import { getPlayer, updateScores } from "./playerHandler.js";
import { updatePlayerScores } from "../services/playerService.js";

function runLevel(riddles, level, player){
    // run level of riddles
    console.log(`\n== Level: '${level}' ==`);
    // initialize riddle and time
    let riddle;
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
    try {
            // variable for exit
            const exit = "0";
            // main function for the game
            console.log("\n== Welcome to the Riddle Game ==");
            // get player from database or create if not exists
            const player = await getPlayer();
            // if not created, return to main menu
            if (!player){
                return;
            }
            // intialize level by readlin-sync.question
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
            // update player data in the data base
            await updateScores(player);
    } catch (error) {
        console.error(`Game error: ${error.message}`);
    }
}