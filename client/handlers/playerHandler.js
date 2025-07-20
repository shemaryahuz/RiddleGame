// Functions for handling with player
import Player from "../models/Player.js";
import { question } from "readline-sync"

export function createPlayer(){
    const username = question("\nPlease enter username: ")
    return new Player(username);
}