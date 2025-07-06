

import Riddle from "../models/Riddle.js"
import ChoiceRiddle from "../models/ChoiceRiddle.js"

export default function askRiddles(player, riddles){  
    let r;
    let time;
    for (let riddle of riddles){
        if (riddle.level === "multi-choices"){
            r = new ChoiceRiddle(riddle);
        }
        else{
            r = new Riddle(riddle); 
        }
        time = player.recordTime(() => r.ask());
        player.times.push(time);
    }
}