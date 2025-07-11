// CRUD methods for riddles managment

import Id from "short-unique-id"
import { question } from "readline-sync";
import Riddle from "../models/Riddle.js";
// import { addRiddle, allRiddles, deleteRiddle, getRiddles, sendRiddle } from "../services/riddleService.js";

function showRiddles(riddles){
    // function that gets an array of riddles and log the details to the console
    console.log("All the Riddles of the Riddle Game:");
    let riddle;
    for (let r of riddles){
        riddle = new Riddle(r);
        console.log("level:", riddle.level);
        console.log("id:", riddle.id);
        console.log("name:", riddle.name);
        console.log("question:", riddle.question);
        console.log("answer:", riddle.answer);
    }
}

export async function showAllRiddles(){
    // function to get and show all the riddles
    // const riddles = await getRiddles();
    const riddles = allRiddles;
    showRiddles(riddles);
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