// middleware for authentication and authorization with request token
import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next) {
    try {
        // destruct token from the request's headers
        const token = req.headers.authorization;
        // check if token is valid
        if (!token){
            res.status(401).send({ error: "aoutentication required" });
            return;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.player = decoded;
        next();
    } catch (error) {
        res.status(401).send({ error: `error atuthenticate token: ${error.message}`});
    }
}

export function athorizeRole(...allowedRoles) {
    // return callback with middleware for this role/roles
    return (req, res, next) => {
        if (!req.player){
            res.status(401).send({ error: "authentication required" });
            return;
        }
        if (!allowedRoles.includes(req.player.role)){
            res.status(403).send({ error: "no access for this action" });
            return;
        }
        next();
    }
}