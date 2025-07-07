// Functions for handling with player
import Player from "./models/Player.js";
import {question} from "readline-sync"

export function createPlayer(){
    const name = question("Please enter your name: ")
    return new Player(name);
}