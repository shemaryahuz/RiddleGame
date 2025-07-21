// Functions for handling with player data
import { question } from "readline-sync"
import { addPlayer, fetchAllPlayers, fetchPlayerByUsername, updatePlayerScores, updatePlayerUsername } from "../services/playerService.js";
import Player from "../models/Player.js";

function showPlayer(player){
    // show player details
    console.log();
    console.log(`Username: ${player.username}.`);
    console.log(`Id: ${player.id}.`);
    console.log(`Score: ${player.score}.`);
    console.log(`Best time: ${player.best_time}.`);
    console.log(`Time of creating: ${player.created_at}.`);
    console.log();
}

export async function showAllPlayers() {
    const players = await fetchAllPlayers();
    // if players is undefined, log to the console
    if (!players){
        console.log("\nPlayers not found");
        return;
    }
    console.log("\nAll players:");
    players.forEach(player => {
        showPlayer(player);
    });
}

export async function showPlayerByUsername() {
    // get username from the user
    const username = question("\nEnter player username: ");
    const player = await fetchPlayerByUsername(username);
    if (!player){
        console.log("\nPlayer not found");
        return;
    }
    showPlayer(player);
}

export async function createPlayer(username) {
    // create player object
    const player = { username: username };
    // add new player to the database
    const createdPlayer = await addPlayer(player);
    if (!createdPlayer){
        console.log("\nSomething went wrong with creating player, try again.");
        return;
    }
    console.log("\nCreated player:")
    showPlayer(createdPlayer);
    return createdPlayer;
}

export async function getPlayer() {
    // get username from the user
    const username = question("\nEnter username: ");
    // get player from database
    let player = await fetchPlayerByUsername(username); // { player } | null
    // if player exist show welcome back
    if (player){
        console.log(`\nWelcome back ${player.username}!`);
    }
    // if not found, create new player
    else{
        console.log("\nCreating new player:");
        player = await createPlayer(username);
        if (!player){
            return;
        }
    }
    return new Player(player.username);
}

export async function updateScores(player) {
    const playerData = { 
                username: player.username,
                score: player.score,
                bestTime: player.bestTime
            }
    const updated = await updatePlayerScores(playerData);
    if (!updated){
        console.log("\nSomething went wrong with updating player.");
        return;
    }
    console.log("\nUpdated player:");
    showPlayer(updated);
}

export async function updateUsername() {
    const oldName = question("\nEnter current username: ");
    const newName = question("\nEnter new username: ");
    const playerData = { 
                username: newName
            }
    const updated = await updatePlayerUsername(oldName, playerData);
    if (!updated){
        console.log("\nSomething went wrong with updating player.");
        return;
    }
    console.log("\nUpdated player:");
    showPlayer(updated);
}