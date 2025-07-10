// handlers for riddles route

import { getAllRiddles } from "../services/riddleService.js";

export async function sendAllRiddles(req, res) {
    // get and send a response with all riddles array
    const riddles = await getAllRiddles();
    res.send(riddles);
}