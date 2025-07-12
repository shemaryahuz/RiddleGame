// CRUD methods for riddles managment

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import { fetchAllRiddles, fetchRiddleById, addRiddle } from "../services/riddleService.js";

function showRiddle(riddle){
    // show riddle details
    console.log();
    console.log("level:", riddle.level);
    console.log("id:", riddle.id);
    console.log("name:", riddle.name);
    console.log("question:", riddle.question);
    console.log("answer:", riddle.answer);
    console.log();
}

export async function showAllRiddles(){
    // function to get and show all the riddles
    const riddles = await fetchAllRiddles();
    console.log("\nAll the Riddles of the Riddle Game:");
    for (let riddle of riddles){
        showRiddle(riddle);
    }
}

export async function showRiddleById() {
    // get id from the user
    const riddleId = question("\nEnter riddle id: ");
    // fetch riddle from the server
    const riddle = await fetchRiddleById(riddleId);
    if (!riddle){
        // if returned object is empty, log 'not found'
        console.log("\nRiddle not found.");
    }
    else{
        // if found, show riddle details
        showRiddle(riddle);
    }
}


export async function createRiddle() {
    // function to create a new riddle and store in the database
    console.log("\nCreating a new Riddle:"); 
    // get user inputs
    const rName = question("\nEnter Riddle name: ");
    const rQuestion = question("\nEnter Riddle question: ");
    const rAnswer = question("\nEnter Riddle answer: ");
    // create riddle entity with properties
    const riddle = new Riddle({
        level: "extra",
        name: rName,
        question: rQuestion,
        answer: rAnswer
    });
    // send the riddle and get the created riddle from the server
    const createdRiddle = await addRiddle(riddle);
    // if not created, log to the console
    if (!createdRiddle){
        console.log("Something went wrong with creating riddle");
    }
    else{
        console.log("\nCreated riddle:");
        showRiddle(createdRiddle);
    }
}

export function deleteRiddleById(){
    const id = question("Enter id for deleting: ");
    deleteRiddle(id);
}