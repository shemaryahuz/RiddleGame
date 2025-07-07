// Riddle Game Application

import { showWelcome, showGoodbye, displayMenu } from "./src/ui/menu.js";
import { game } from "./src/ui/game.js";
import { showAllRiddles } from "./src/ui/riddlesCRUD.js";

async function main(){
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
            continue;
        }
        // call handleChoice function with user's choice
        await handleChoice(choice);
    }
}

async function handleChoice(choice){
    switch (choice){
        case "1":
            // if option 1 was chosen, run the game
            await game();
            break;
        case "2":
            
        case "3":
            // if option 3 was chosen, show all riddles
            await showAllRiddles();
            break;
        case "4":
        case "5":
        case "6":
        default:
            // if user's input is invalid log to th console
            console.log("Invalid choice. Try again.");
    }
}

// run the main function
main();