// players dashbord for view and operations

import { question } from "readline-sync";
import { deletePlayerByUsername, showAllPlayers, showPlayerByUsername, updateUsername } from "../handlers/playerHandler.js"

function displayPlayerMenu(){
    // Display Menu options to the user and return his choice
    console.log("\nPlayer Menu:\n");
    console.log("0. Return to main menu.\n");
    console.log("1. Show all Players.\n");
    console.log("2. Show Player by username.\n");
    console.log("3. Update Player by username.\n");
    console.log("4. Delete Player by username.\n");

    return question("Enter your choice: ");
}

async function handleChoice(choice) {
    switch(choice){
        case "1":
            // if option 1 was chosen, fetch and show all players
            await showAllPlayers();
            break;
        case "2":
            // if option 2 was chosen, get username from the user, fetch player and show
            await showPlayerByUsername();
            break;
        case "3":
            // if option 3 was chosen, get new username and update player
            await updateUsername();
            break;
        case "4":
            // if option 4 was chosen, get username from the user and delete player
            await deletePlayerByUsername();
            break;
        default:
            // if choice is invalid, log to the console
            console.log("\nChoice is invalid. Try again.");
    }
}

export async function playerDashboard() {

    console.log("\n== Players Dashboard ==\n");

    // intialize variables for main loop
    const exit = "0";
    let toExit = false;

    while (!toExit){
        // show menu and get user's choice
        const choice = displayPlayerMenu();
        if (choice === exit){
            toExit = true;
            break;
        }
        // call handleChoice function with user's choice
        await handleChoice(choice);
    }
}