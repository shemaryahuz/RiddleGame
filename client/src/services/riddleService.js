// Functions for handling with Riddles

const URL = "http://localhost:3000";

export async function getRiddles() {
    try {
        // get riddles from server as json string
        const riddlesResponse = await fetch(URL + "/riddles");
        const riddlesArr = await riddlesResponse.json();
        return riddlesArr;
    }
    catch (err) {
        // if there is an error, log to the console
        console.error(`Error fetching riddles from the server: ${err}`);
        return [];
    }
}