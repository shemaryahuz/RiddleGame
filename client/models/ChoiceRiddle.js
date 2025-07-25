import Riddle from "./Riddle.js";

export default class ChoiceRiddle extends Riddle{
    constructor(riddle){
        super(riddle);
        this.options = riddle.options;
    }
    showOptions(){
        console.log("\nOptions:");
        for (let i = 0; i < this.options.length; i++){
            console.log(`${i + 1}: ${this.options[i]}`);
        }
    }
    ask(useHint){
        // show riddle details
        super.showRiddle();
        // show options
        this.showOptions();
        let input = super.getAnswer();
        while (input !== this.answer){
            if (input === "hint" && this.hint){
                useHint();
            }
            else if (input === "hint"){
                console.log("\nNo hint available.")
            }
            else{
                super.showWrong();
            }
            input = super.getAnswer();
        }
        super.showCorrect();
    }
}