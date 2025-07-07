// Riddle Game Application
import Player from "./models/Player.js";
import {question} from "readline-sync"



const name = question("Please enter your name: ")
const player = new Player(name);

const level = question("Choose game level (all/ multi-choices/ easy/ medium/ hard): ")


player.showState();