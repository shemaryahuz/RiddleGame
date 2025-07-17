// middlewares for validation and error handling of riddles requests

import { fetchAllRiddles } from "../dal/riddleDAL.js";

export async function validateFetchRiddles(req, res, next){
    // get the riddles from the database
    const riddles = await fetchAllRiddles();
    // if undefined returned, response with error
    if (!riddles){
        res.status(404).send({ error: "Error fetcing riddles from database" })
    }
    // if empty array returned, response with error
    if (!riddles.length){
        res.status(404).send({ error: "Riddles not found" });
    }
    next();
}