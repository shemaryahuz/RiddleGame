// middlewares for validation and error handling of players requests

export function validateUsername(req, res, next){
    // destruct the username from request body
    const { username } = req.body;
    // if body format is invalid, response with error
    if (!username){
        res.status(404).send({ error: "body is malformed" });
        return;
    }
    // if username is not a string, response with error
    if (typeof username !== "string"){
        res.status(404).send({ error: "username type is invalid" });
        return;
    }
    next();
}

export function validateScores(req, res, next){
    // destruct score and time from request body
    const { score, bestTime } = req.body;
    // if body format is invalid, response with error
    if (!score || !bestTime){
        res.status(404).send({ error: "body is malformed" });
        return;
    }
    if (typeof score !== "number" || typeof bestTime !== "number"){
        res.status(404).send({ error: "type of score or time is invalid" });
        return;
    }
    next();
}