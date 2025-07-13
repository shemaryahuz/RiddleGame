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
        const response = await fetch(riddlesURL + "/addRiddle", request);
        const responseObj = await response.json();
        // if response without riddle that created, return undefind
        if (!responseObj.riddle){
            return;
        }
        // if riddle created return it
        return responseObj.riddle;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error creating riddle: ${err}`);
        return;
    }
}

export async function updateRiddle(riddleId, newRiddle) {
    // function to update riddle by id
    try{
        // create request of PUT method
        const request = {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newRiddle)
        };
        // send request with route of '/:riddleId' and the PUT request
        const response = await fetch(riddlesURL + "/" + riddleId, request);
        const responseObj = await response.json();
        // if response without riddle that updated, return undefind
        if (!responseObj.riddle){
            return;
        }
        // if riddle updated return it
        return responseObj.riddle;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error updating riddle: ${err}`);
        return;
    }
}

export async function deleteRiddle(riddleId) {
    // function to delete riddle by id
    try{
        // create request of DELETE method
        const request = {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        };
        // send request with route of '/:riddleId' and the DELETE request
        const response = await fetch(riddlesURL + "/" + riddleId, request);
        const responseObj = await response.json();
        // if response without succeded message, return undefind
        if (!responseObj.message){
            return;
        }
        // if riddle deleted return the message
        return responseObj.message;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error deleting riddle: ${err}`);
        return;
    }
}