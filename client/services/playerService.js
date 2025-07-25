// functions for fetching from players api

const playerURL = "http://localhost:3000/players";

export async function fetchAllPlayers() {
    // function to fetch all players from the server and parse to array
    try {
        // get riddles from server as json string
        const playersResponse = await fetch(playerURL);
        const playersArr = await playersResponse.json();
        // if the response is with error of not found, return undefind
        if (playersArr.error){
            return;
        }
        return playersArr;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error fetching players from the server: ${err}`);
        return;
    }
}

export async function fetchPlayerByUsername(username){
    // function to fetch player from the server by username and parse to an object
    try {
        // get player from server as json string
        const playerResponse = await fetch(playerURL + "/" + username);
        const playerObj = await playerResponse.json();
        // if the response is with error of not found, return undefind
        if (playerObj.error){
            return;
        }
        return playerObj;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error fetching player from the server: ${err}`);
        return;
    }
}

export async function addPlayer(player) {
    // function to send new player to store on the database

    try{
        // create request
        const request = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(player)
        };
        // send request with route of '/addPlayer'
        const response = await fetch(playerURL + "/addPlayer", request);
        const responseObj = await response.json();
        // if response without player that created, return undefind
        if (!responseObj.player){
            return;
        }
        // if riddle created return it
        return responseObj.player;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error creating player: ${err}`);
        return;
    }
}

export async function updatePlayerScores(playerData) {
    // function to update player scores by username
    try{
        // create request of PUT method
        const request = {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(playerData)
        };
        // send request with route of '/updateScores' and the PUT request
        const response = await fetch(playerURL + "/updateScores", request);
        const responseObj = await response.json();
        // if response without player that updated, return undefind
        if (!responseObj.player){
            return;
        }
        // if player updated return it
        return responseObj.player;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error updating player: ${err}`);
        return;
    }
}

export async function updatePlayerUsername(oldName, playerData) {
    // function to update player username by oldName
    try{
        // create request of PUT method
        const request = {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(playerData)
        };
        // send request with route of '/updateScores' and the PUT request
        const response = await fetch(playerURL + "/updateUsername/" + oldName, request);
        const responseObj = await response.json();
        // if response without player that updated, return undefind
        if (!responseObj.player){
            return;
        }
        // if player updated return it
        return responseObj.player;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error updating player: ${err}`);
        return;
    }
}

export async function deletePlayer(username) {
    // function to delete player by username
    try{
        // create request of DELETE method
        const request = {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        };
        // send request with route of '/:username' and the DELETE request
        const response = await fetch(playerURL + "/deletePlayer/" + username, request);
        const responseObj = await response.json();
        // if response without succeded message, return undefind
        if (!responseObj.message){
            return;
        }
        // if player deleted return the message
        return responseObj.message;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error deleting player: ${err}`);
        return;
    }
}