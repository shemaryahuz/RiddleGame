// Data access layer for riddles using mongoDB database
import db from "../../config/riddleDB.js";

// get access to the riddles collection in the database of mongoDB
const riddles_collection = db.collection("riddles");

export async function fetchAllRiddles() {
    try {
        // get all documents of riddles from the database
        const riddles = await riddles_collection.find().toArray();
        return riddles;
    } catch (error) {
        console.error(`Error fetching riddles from database: ${error}`);
    }
}