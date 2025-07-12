// CRUD methods for riddles managment

import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
import { fetchAllRiddles, fetchRiddleById } from "../services/riddleService.js";

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
        return;
    }
    // if found, show riddle details
    showRiddle(riddle);
}


export async function createRiddle() {
    // function to create a new riddle and store in the database
    // const riddles = await getRiddles();
    const riddles = allRiddles;
    // get riddles from the server to create new id
    console.log("Creating a new Riddle:");
    // create Riddle properties
    const rId = new Id().rnd(3);
    // get user inputs
    const rName = question("Enter Riddle name: ");
    const rQuestion = question("Enter Riddle question: ");
    const rAnswer = question("Enter Riddle answer: ");
    // create riddle entity
    const riddle = new Riddle({
        id: rId,
        level: "extra",
        name: rName,
        question: rQuestion,
        answer: rAnswer
    });
    // await sendRiddle(riddle);
    addRiddle(riddle);
}

export function deleteRiddleById(){
    const id = question("Enter id for deleting: ");
    deleteRiddle(id);
}