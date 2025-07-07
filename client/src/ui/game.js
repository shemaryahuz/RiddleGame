// Functions for game management

import Riddle from "../models/Riddle.js";
import ChoiceRiddle from "../models/ChoiceRiddle.js";
import { getRiddles } from "../services/riddleServices.js";
import { createPlayer } from "../services/playerServices.js";

function chooseLevel(){
    return question("Choose game level (all/ multi-choices/ easy/ medium/ hard): ")
}

function runLevel(riddles, player){
    let r;
    let time;
    for (let riddle of riddles){
        if (riddle.level === "multi-choices"){
            r = new ChoiceRiddle(riddle);
        }
        else{
            r = new Riddle(riddle); 
        }
        time = player.recordTime(() => r.ask());
        player.times.push(time);
    }
}

export function game(){
    // main function for the game

    // intialize player and level by readlin-sync.question
    const player = createPlayer();
    const level = chooseLevel();
    // intialize riddles filtered by level
    const riddles = getRiddles().filter(riddle => riddle.level === level);
    // if level is 'all' or invalid level input, get all riddles
    if (riddles.length === 0){
        riddles = getRiddles();
    }
    runLevel(riddles, player);
    player.showState();
}