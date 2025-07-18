// handlers for riddles route

import { deleteRiddle, fetchAllRiddles, fetchRiddle, insertRiddle, updateRiddle } from "../dal/riddleDAL.js";

export async function sendAllRiddles(req, res) {
    // get the riddles from the database
    try {
        const riddles = await fetchAllRiddles();
        // if empty array returned, response with error
        if (!riddles.length){
            res.status(404).send({ error: "riddles array not found" });
            return;
    }
    res.send(riddles);
    } catch (error) {
        res.status(404).send({ error: `Error fetcimg riddles: ${error.message}` });
    }
}

export async function sendRiddle(req, res) {
    // destruct id from request params
    const { riddleId } = req.params;
    // get the riddle by id
    try {
        const riddle = await fetchRiddle(riddleId);
        // if riddle is null, response message and status code of 'not found'
        if (!riddle){
            res.status(404).send({ error: "riddle id not found" });
            return;
        }
        // if found, response with the riddle
        res.send(riddle);

    } catch (error) {
        res.status(404).send({ error: `Error fetcing riddle: ${error.message}` });
    }
}

export async function addNewRiddle(req, res) {
    try {
        // destruct the riddle from request body
        const riddle = req.body;
        // add the new riddle and get the created riddle with its id
        const createdRiddle = await insertRiddle(riddle);
        // if added, response with succeded message and the created riddle
        res.send({ message: "riddle added successfuly", riddle: createdRiddle });
    } catch (error) {
        res.status(404).json({ error: `Error adding riddle: ${error.message}` });
    }
}

export async function updateRiddleById(req, res){
    try {
        // destruct id from request params
        const { riddleId } = req.params;
        // destruct the riddle from request body
        const newRiddle = req.body;
        // update the riddle
        const update = await updateRiddle(riddleId, newRiddle);
        // if the result from mongodb of matchedCount is 0, response with 'not found'
        if (!update.matchedCount){
            res.status(404).send({ error: "riddle id not found" });
            return;
        }
        // add the id for reesponse
        newRiddle._id = riddleId;
        // if updated, response with succeded message and the updated riddle
        res.send({ message: "riddle updated successfuly", riddle: newRiddle });
    } catch (error) {
        res.status(404).json({ error: `Error updating riddle: ${error.message}` });
    }
}

export async function deleteRiddleById(req, res){
    try {
        // destruct id from request params
        const { riddleId } = req.params;
        // delete riddle by id
        const deleted = await deleteRiddle(riddleId);
        // if not deleted, response with error message
        if (!deleted.deletedCount){
            res.status(404).send({ error: "riddle id not found" });
            return;
        }
        // response with status code of 'ok' to send succeded message
        res.status(200).json({ message: "riddle deleted successfuly" });
    } catch (error) {
        res.status(404).json({ error: `Error deleting riddle: ${error.message}` });
    }
}