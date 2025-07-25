// data access layer for riddles using mongoDB database
import { ObjectId } from "mongodb";
import db from "../../database/riddleDB.js";

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
        return riddle;
    } catch (error) {
        console.error(`Error fetching riddle from database: ${error}`);
        throw new Error(error.message);
    }
}

export async function insertRiddle(riddle) {
    // insert new document of riddle
    try {
        const withId = await riddles_collection.insertOne(riddle);
        riddle._id = withId.insertedId;
        return riddle;
    } catch (error) {
        console.error(`Error adding riddle to the database: ${error}`);
        throw new Error(error.message);
    }
}

export async function updateRiddle(riddleId, newRiddle) {
    // update riddle by id
    try {
        const query = { _id: new ObjectId(riddleId) };
        const update = { $set : newRiddle };
        const result = await riddles_collection.updateOne(query, update);
        return result;
    } catch (error) {
        console.error(`Error updating riddle in the database: ${error}`);
        throw new Error(error.message);
    }
}

export async function deleteRiddle(riddleId) {
    // delete riddle by id
    try {
        const query = { _id: new ObjectId(riddleId) };
        const deleted = await riddles_collection.deleteOne(query);
        return deleted;
    } catch (error) {
        console.error(`Error updating riddle in the database: ${error}`);
        throw new Error(error.message);
    }
}