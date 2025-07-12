// main menu of the application

import { question } from "readline-sync";
import { game } from "../controllers/gameController.js";
import { riddleDashboard } from "./riddleDashboard.js";

function showWelcome(){
    // Show Welcome message to the user
    console.log("=== Welcome to the Riddle Game Application ===\n");
}

function showGoodbye(){
    // Show goodbye message to the user
    console.log("\n=== Goodbye, Thank you for using Riddle Game ===");
}

function displayMainMenu(){
    // Display Menu options to the user and return his choice
    console.log("\nMain Menu:\n");
    console.log("0. Exit.\n");
    console.log("1. Play the Game.\n");
    console.log("2. View riddles dashboard.\n");
    console.log("3. View players dashboard.\n");
    return question("Enter your choice: ");
}

async function handleChoice(choice){
    // function for handling with user's choice
    switch (choice){
        case "1":
            // if option 1 was chosen, run the game and get bool to continue or exit
            await game();
            break;
        case "2":
            // if option 2 was chosen, run the riddles dashboard
            await riddleDashboard();
            break;
        case "3":
            console.log("option not ready yet.");
        default:
            // if user's input is invalid log to th console
            console.log("Invalid choice. Try again.");
    }
}

export default async function main(){
    // main function of the application

    // show welcome message
    showWelcome();

    // intialize variables for main loop
    const exit = "0";
    let toExit = false;

    while (!toExit){
        // show menu and get user's choice
        const choice = displayMainMenu();
        if (choice === exit){
            // if exit was chosen, show goodbye message and exit
            showGoodbye();
            toExit = true;
            break;
        }
        // call handleChoice function with user's choice
        await handleChoice(choice);
    }
}