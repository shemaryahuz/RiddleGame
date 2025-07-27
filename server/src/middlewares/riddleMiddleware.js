// middlewares for validation and error handling of riddles requests

import { ObjectId } from "mongodb";

export function validateRiddleId(req, res, next){
    // get riddleId from url params and validate it
    const { riddleId } = req.params;
    if (!riddleId || !ObjectId.isValid(riddleId)){
        res.status(404).send({ error: "riddleId is invalid" });
        return;
    }
    next();
}

export function validateRiddle(req, res, next){
    // destruct the riddle from request body
    const riddle = req.body;
    // if body is not a json, return status code of bad request with error message
    if (!riddle){
        res.status(404).send({ error: "body is malformed" });
        return;
    }
    // if body is not a valid format of riddle, return status code of bad request with error message
    if (!riddle.name || !riddle.question || !riddle.answer){
        res.status(400).send({ error: "riddle format is invalid" });
        return;
    }
    if (!riddle.level){
        riddle.level = "extra";
    }
    next();
}