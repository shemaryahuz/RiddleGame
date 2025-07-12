// Functions for handling with Riddles

// url for riddles CRUD
const riddlesURL = "http://localhost:3000/riddles";

export async function fetchAllRiddles() {
    // function to fetch all riddles from the server and parse to array
    try {
        // get riddles from server as json string
        const riddlesResponse = await fetch(riddlesURL);
        const riddlesArr = await riddlesResponse.json();
        return riddlesArr;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error fetching riddles from the server: ${err}`);
        return [];
    }
}

export async function fetchRiddleById(riddleId){
    // function to fetch riddle from the server by id and parse to an object
    try {
        // get riddle from server as json string
        const riddleResponse = await fetch(riddlesURL + "/" + riddleId);
        const riddleObj = await riddleResponse.json();
        // if the response is with error of not found, return empty object
        if (riddleObj.error){
            return;
        }
        return riddleObj;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error fetching riddle from the server: ${err}`);
        return;
    }
}

export async function addRiddle(riddle) {
    // function to send new riddle to store on the database

    try{
        // create request
        const request = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(riddle)
        };
        // send request with route of '/addRiddle'
        const createdResponse = await fetch(riddlesURL + "/addRiddle", request);
        const riddleObj = await createdResponse.json();
        // if response without riddle that created return undefind
        if (!riddleObj.riddle){
            return;
        }
        // if riddle created return it
        return riddleObj.riddle;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error creating riddle: ${err}`);
        return;
    }
}