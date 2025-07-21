// Class to represent a Player

function getTotalTime(times){
    return times.reduce((sum, time) => sum + time, 0);
}

function getAverageTime(times){
    return getTotalTime(times) / times.length;
}

function calculateScore(score, time, hintUsed){
    score += 100;
    score -= time;
    if (hintUsed){
        score - 20;
    }
    if (score < 0){
        score = 0;
    }
    return score;
}

export default class Player{
    constructor(username){
        this.username = username;
        this.times = []; // seconds per riddle
        this.hintsTaken = []; // booleans per riddle
        this.bestTime = 0;
        this.score = 0;
    };
    recordScore(riddle){

        // boolean to change score if hint used
        let hintUsed = false;

        // callback for ask method
        const useHint = () => {
            if (riddle.hint){
                console.log(`\nHint: ${riddle.hint}`);
                hintUsed = true;
            }
        };

        // decorator for recording the time per riddle
        const start = new Date().getTime();
        riddle.ask(useHint);
        const end = new Date().getTime();
        const time = (end - start) / 1000;

        // add details to the player
        if (this.bestTime === 0){
            this.bestTime = time;
        }
        if (this.bestTime > time){
            this.bestTime = time;
        }

        this.times.push(time);
        this.hintsTaken.push(hintUsed);

        // calculate score
        this.score = calculateScore(this.score, time, hintUsed);
    };

    showState(riddles){
        console.log(`Great job ${this.username}!`);
        for (let i = 0; i < this.times.length; i++){
            console.log(`\nRiddle '${riddles[i].name}': ${this.times[i].toFixed(2)} seconds.`);
            console.log(`Hint was taken: ${this.hintsTaken[i]}.`)
        }
        console.log(`\nTotal time: ${getTotalTime(this.times).toFixed(2)} seconds`);
        console.log(`Average time per riddle: ${getAverageTime(this.times).toFixed(2)} seconds`);
        console.log(`Total score: ${this.score.toFixed(2)}`);
        console.log(`Best time: ${this.bestTime.toFixed(2)}`);
    };
}