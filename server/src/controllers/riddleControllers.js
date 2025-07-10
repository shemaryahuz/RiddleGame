// handlers for riddles route

import { addRiddle, getAllRiddles, getRiddle } from "../services/riddleService.js";

export async function sendAllRiddles(req, res) {
    // get all riddles array
    const riddles = await getAllRiddles();
    // convert to organized json string
    const riddleStr = JSON.stringify(riddles, null, 2); 
    // send the json string
    res.send(riddleStr);
}

export async function sendRiddle(req, res) {
    // destruct id from request params
    const riddleId = req.params?.riddleId;
    // get the riddle by id
    const riddle = await getRiddle(riddleId);
    // if riddle is undefined, return message and status code of 'not found'
    if (!riddle){
        res.status(404).send({ error: "riddle id not found" });
    }
    // if riddle found, convert to json string and send it
    const riddleStr = JSON.stringify(riddle, null, 2);
    res.send(riddleStr);
}

export async function addNewRiddle(req, res) {
    // destruct the riddle from request body
    const riddle = req.body;
    // if body is not a json, return status code of bad request with error message
    if (!riddle){
        res.status(404).send({ error: "body is malformed" })
    }
    // if body is not a valid format of riddle, return status code of bad request with error message
    if (!riddle.name || !riddle.question || !riddle.answer){
        res.status(400).send({ error: "riddle format is invalid" })
    }
    // add the new riddle
    const added = await addRiddle(riddle);
    // if not added, response with error message and status code of error
    if (!added){
        res.status(500).json({ error: "error adding riddle to the database"})
    }
    // if added response with succeded message
    res.json({ message: "riddle added successfuly"});
}