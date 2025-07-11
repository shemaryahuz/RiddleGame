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

export async function sendRiddle(riddle) {
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
        // send request
        await fetch(URL + "/addRiddle", request);
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error sending riddle to the server: ${err}`);
        return [];
    }
}