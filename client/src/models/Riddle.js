// Class to represent a Riddle
import {question} from "readline-sync"

export default class Riddle{
    // initialize riddle properties
    constructor(riddle){
        this.level = riddle.level;
        this.id = riddle.id;
        this.name = riddle.name;
        this.question = riddle.question;
        this.answer = riddle.answer;
    }
    showRiddle(){
        console.log(`\nRiddle Level: ${this.level}.`);
        console.log(`\nRiddle name: ${this.name}.`);
        console.log(`\nRiddle id: ${this.id}.`);
        console.log(`\nQuestion: ${this.question}.`);
    }
    getAnswer(){
        return question("\nEnter your answer: ");
    }
    showWrong(){
        console.log("\nWrong answer, try again.");
    }
    showCorrect(){
        console.log("\nWell done! Correct answer.\n");
    }
    ask() {
        // show riddle details
        this.showRiddle();
        // get the user's answer until it's correct
        let input = this.getAnswer();
        while (input !== this.answer){
            this.showWrong();
            input = this.getAnswer();
        }
        this.showCorrect();
    }
}