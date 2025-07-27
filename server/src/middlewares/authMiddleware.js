// middleware for authentication with request token
import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
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

export async function requireAdmin(req, res, next) {
    // check admin role
    if (req.player?.role !== "admin"){
        res.status(403).send({ error: "admin access required" });
        return;
    }
    next();
}