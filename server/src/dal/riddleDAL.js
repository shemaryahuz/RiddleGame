// Data access layer for riddles using mongoDB database
import { ObjectId } from "mongodb";
import db from "../../config/riddleDB.js";

// get access to the riddles collection in the database of mongoDB
const riddles_collection = db.collection("riddles");

export async function fetchAllRiddles() {
    // get all documents of riddles from the database
    try {
        const riddles = await riddles_collection.find().toArray();
        return riddles;
    } catch (error) {
        console.error(`Error fetching riddles from database: ${error}`);
        throw new Error(error.message);
    }
}

export async function fetchRiddle(riddleId) {
    // get riddle document by id
    try {
        const query = { _id: new ObjectId(riddleId) };
        const riddle = await riddles_collection.findOne(query);
        console.log(riddle);
    } catch (error) {
        console.error(`Error fetching riddle from database: ${error}`);
        throw new Error(error.message);
    }
}