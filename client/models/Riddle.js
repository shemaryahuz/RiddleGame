// Class to represent a Riddle
import {question} from "readline-sync"

export default class Riddle{
    // initialize riddle properties
    constructor(riddle){
        this.level = riddle.level;
        this.name = riddle.name;
        this.question = riddle.question;
        this.answer = riddle.answer;
        this.hint = riddle.hint;
    }
    showRiddle(){
        console.log(`\nRiddle level: ${this.level}.`);
        console.log(`\nRiddle name: ${this.name}.`);
        console.log(`\nQuestion: ${this.question}.`);
    }
    getAnswer(){
        return question("\nEnter your answer (if you want to use hint, type 'hint'): ");
    }
    showWrong(){
        console.log("\nWrong answer, try again.");
    }
    showCorrect(){
        console.log("\nWell done! Correct answer.\n");
    }
    ask(useHint) {
        // show riddle details
        this.showRiddle();
        // get the user's answer until it's correct
        let input = this.getAnswer();
        while (input !== this.answer){
            if (input === "hint" && this.hint){
                useHint();
            }
            else if (input === "hint"){
                console.log("\nNo hint available.")
            }
            else{
                this.showWrong();
            }
            input = this.getAnswer();
        }
        this.showCorrect();
    }
}