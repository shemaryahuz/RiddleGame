// CRUD methods for riddles managment

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import { fetchAllRiddles, fetchRiddleById, addRiddle, updateRiddle, deleteRiddle } from "../services/riddleService.js";

function showRiddle(riddle){
    // show riddle details
    console.log();
    console.log("level:", riddle.level);
    console.log("id:", riddle._id);
    console.log("name:", riddle.name);
    console.log("question:", riddle.question);
    console.log("answer:", riddle.answer);
    console.log();
}

export async function showAllRiddles(){
    // function to get and show all the riddles
    const riddles = await fetchAllRiddles();
    // if riddles undefined, log to the console
    if (!riddles){
        console.log("Riddles not found");
        return;
    }
    console.log("\nAll the Riddles of the Riddle Game:");
    riddles.forEach(riddle => {
        showRiddle(riddle);
    });
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
    const created = await addRiddle(riddle);
    // if not created, log to the console
    if (!created){
        console.log("Something went wrong with creating riddle");
    }
    else{
        console.log("\nCreated riddle:");
        showRiddle(created);
    }
}

export async function updateRiddleById(){
    // function to update riddle by id
    // get user inputs
    const riddleId = question("\nEnter id for updating: ");
    const nName = question("\nEnter the new riddle name: ");
    const nQuestion = question("\nEnter the new riddle question: ");
    const nAnswer = question("\nEnter the new riddle answer: ");

    // create entity of the new riddle
    const newRiddle = new Riddle({
        name: nName,
        question: nQuestion,
        answer: nAnswer
    });

    // update the riddle in the server
    const updated = await updateRiddle(riddleId, newRiddle);
        // if not updated, log to the console
    if (!updated){
        console.log("\nSomething went wrong with updating riddle");
    }
    // if updated, show the updated riddle
    else{
        console.log("\nUpdated riddle:");
        showRiddle(updated);
    }
}

export async function deleteRiddleById() {
    // function to delete riddle by id
    // get id from the user
    const riddleId = question("\nEnter id for deleting: ");
    const success = await deleteRiddle(riddleId);
    // if message wasn't returned, log to the console
    if (!success){
        console.log("\nSomething went wrong with deleting");
    }
    // if success, log the message
    else{
        console.log();
        console.log(success);
    }
}