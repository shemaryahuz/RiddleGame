// Class to represent a Player



export default class Player{
    constructor(name){
        this.name = name;
        this.times = [];
    };
    recordTime(askFunc){
        const start = new Date().getTime();
        askFunc();
        const end = new Date().getTime();
        return (end - start) / 1000;
    };
    showState(){
        console.log(`Great job ${this.name}!`);
        for (let i = 0; i < this.times.length; i++){
            console.log(`Riddle ${i + 1}: ${this.times[i]} seconds`);
        }
        console.log(`Total time: ${getTotalTime(this.times)} seconds`);
        console.log(`Average time per riddle: ${getAverageTime(this.times)} seconds`);
    };
}

function getTotalTime(times){
    let sum = 0;
    times.forEach((time) => sum += time);
    return sum;
}

function getAverageTime(times){
    return getTotalTime(times) / times.length;
}