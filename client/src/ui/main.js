// main function of the application

import { showWelcome, showGoodbye, displayMenu } from "./menu.js";
import { game } from "./game.js";
import { showAllRiddles, createRiddle, deleteRiddleById } from "./riddleOptions.js";

async function handleChoice(choice){
    // boolean to continue or exit
    let toContinue = true;
    // function for handling with user's choice
    switch (choice){
        case "1":
            // if option 1 was chosen, run the game and get bool to continue or exit
            toContinue = await game();
            return toContinue;
        case "2":
            // if option 2 was chosen, create new user
            await createRiddle();
            break;
        case "3":
            // if option 3 was chosen, show all riddles
            await showAllRiddles();
            break;
        case "4":
            console.log("Option not ready yet.");
            break;
        case "5":
            // if option 5 was chosen, delete riddle by id
            deleteRiddleById();
            break;
        case "6":
            console.log("Option not ready yet.");
            break;
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
        const choice = displayMenu();
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