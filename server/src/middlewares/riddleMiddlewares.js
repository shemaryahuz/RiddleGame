// middlewares for validation and error handling of riddles requests

import { ObjectId } from "mongodb";

export async function validateRiddleId(req, res, next){
    const { riddleId } = req.params;
    // validate riddleId
    if (!riddleId || !ObjectId.isValid(riddleId)){
        res.status(404).send({ error: "riddleId is invalid" });
        return;
    }
    next();
}