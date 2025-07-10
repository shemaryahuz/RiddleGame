// handlers for riddles route

import { getAllRiddles, getRiddle } from "../services/riddleService.js";

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
        res.status(404).send({ msg: "riddle id not found"});
    }
    // if riddle found, convert to json string and send it
    const riddleStr = JSON.stringify(riddle, null, 2);
    res.send(riddleStr);
}