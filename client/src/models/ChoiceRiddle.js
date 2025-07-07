import Riddle, {getAnswer, showWrong, showCorrect} from "./Riddle.js";

export default class ChoiceRiddle extends Riddle{
    constructor(riddle){
        super(riddle);
        this.options = riddle.options;
    }
    ask(){
        console.log("Riddle number: " + this.id);
        console.log("Question: " + this.question);
        console.log("Options:");
        for (let i = 0; i < this.options.length; i++){
            console.log(`${i + 1}: ${this.options[i]}`);
        }
        let input = getAnswer();
        while (input !== this.answer){
            showWrong();
            input = getAnswer();
        }
        showCorrect();
    }
}