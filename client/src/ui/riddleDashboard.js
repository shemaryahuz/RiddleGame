// riddles dashbord for view and operations

import { question } from "readline-sync";
import { createRiddle, showAllRiddles, showRiddleById } from "../controllers/riddleController.js";


function displayRiddlesMenu(){
    // Display Menu options to the user and return his choice
    console.log("\nRiddles Menu:\n");
    console.log("0. Return to main menu.\n");
    console.log("1. Show all Riddles.\n");
    console.log("2. Show Riddle by id.\n");
    console.log("3. Create new Riddle.\n");
    console.log("4. Update Riddle by id.\n");
    console.log("5. Delete Riddle by id.\n");

    return question("Enter your choice: ");
}

async function handleChoice(choice) {
    switch(choice){
        case "1":
            // if option 1 was chosen, fetch and show all riddles
            await showAllRiddles();
            break;
        case "2":
            // if option 2 was chosen, get id from the use, fetch riddle and show
            await showRiddleById();
            break;
        case "3":
            // if option 3 was chosen, get inputs and create riddle
            await createRiddle();
            break;
        case "4":
            break;
        case "5":
            break;
        default:
            // if choice is invalid, log to the console
            console.log("\nChoice is invalid. Try again.");
    }
}

export async function riddleDashboard() {

    console.log("\n== Riddles Dashboard ==\n");

    // intialize variables for main loop
    const exit = "0";
    let toExit = false;

    while (!toExit){
        // show menu and get user's choice
        const choice = displayRiddlesMenu();
        if (choice === exit){
            toExit = true;
            break;
        }
        // call handleChoice function with user's choice
        await handleChoice(choice);
    }
}

