// Functions for the user menu

import { question } from "readline-sync";

export function showWelcome(){
    // Show Welcome message to the user
    console.log("=== Welcome to the Riddle Game ===\n");
}

export function showGoodbye(){
    // Show goodbye message to the user
    console.log("\n=== Goodbye, Thank you for using Riddle Game ===");
}

export function displayMenu(){
    // Display Menu options to the user and return his choice
    console.log("Menu:\n");
    console.log("0. Exit.\n");
    console.log("1. Play the Game.\n");
    console.log("2. Create new Riddle.\n");
    console.log("3. Read all Riddles.\n");
    console.log("4. Update an exiting Riddle.\n");
    console.log("5. Delete Riddle.\n");
    console.log("6. View leaderboard.\n");

    return question("Enter your choice: ");
}