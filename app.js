// Riddle Game Application
import allRiddles from "./riddles/riddles.js";
import Player from "./models/Player.js";
import {question} from "readline-sync"
import askRiddles from "./services/main.js"

console.log("=== Welcome to the Riddle Game ===");

const name = question("Please enter your name: ")
const player = new Player(name);

const level = question("Choose game level (all/ multi-choices/ easy/ medium/ hard): ")

let riddles = allRiddles.filter((riddle) => riddle.level === level);

if (!riddles.length){
    riddles = allRiddles;
}

askRiddles(player, riddles);
player.showState();