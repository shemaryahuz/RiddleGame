// Functions for the user menu

import { question } from "readline-sync";

export function showWelcome(){
    // Show Welcome message to the user
    console.log("=== Welcome to the Riddle Game ===");
}

export function showGoodbye(){
    // Show goodbye message to the user
    console.log("=== Goodbye, Thank you for using Riddle Game ===");
}

export function displayMenu(){
    // Display Menu options to the user and return his choice
    console.log("Menu:");
    console.log("0. Exit.");
    console.log("1. Play the Game.");
    console.log("2. Create new Riddle.");
    console.log("3. Read all Riddles.");
    console.log("4. Update an exiting Riddle.");
    console.log("5. Delete Riddle.");
    console.log("6. View leaderboard.");

    return question("Enter your choice: ");
}