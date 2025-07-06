// Class to represent a Riddle
import {question} from "readline-sync"

export function getAnswer(){
    return question("Enter your answer: ");
}

export function showWrong(){
    console.log("Wrong answer, try again.");
    console.log("");
}

export function showCorrect(){
    console.log("");
    console.log("Well done! Correct answer.");
    console.log("");
}

export default class Riddle{
    constructor(riddle){
        this.id = riddle.id;
        this.name = riddle.name;
        this.question = riddle.question;
        this.answer = riddle.answer;
    }
    ask(){
        console.log("Riddle number: " + this.id);
        console.log("Question: " + this.question);
        console.log("");
        let input = getAnswer();
        while (input !== this.answer){
            showWrong();
            input = getAnswer();
        }
        showCorrect();
    }
}