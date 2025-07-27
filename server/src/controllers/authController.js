// controllers for authorization routes
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { fetchPlayer, insertPlayer } from "../dal/playerDAL.js";

export async function login(req, res) {
    try {
            // destruct username and password from the body
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).send({ error: "username and password are required" });
                return;
            }
            // check if username exists
            const player = await fetchPlayer(username);
            if (!player){
                res.status(401).send({ error: "username not found" });
                return;
            }
            // check if password is correct
            const isValidPassword = await bcrypt.compare(password, player.hashed_password);
            if (!isValidPassword){
                res.status(401).send({ error: "wrong password" });
                return;
            }
            // create token with player details (no password)
            const payload = {
                username: player.username,
                role: player.role
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.send({ message: "player logged in successfully", player: player, token: token });
    } catch (error) {
        res.status(500).json({ error: `Error login player: ${error.message}` });
    }
}

export async function signup(req, res) {
    try {
            // destruct username and password from the body
            const { username, password, role = "user" } = req.body;
            if (!username || !password) {
                res.status(400).send({ error: "username and password are required" });
                return;
            }
            // if role is 'admin' require admin password
            if (role === "admin"){
                if (password !== process.env.ADMIN_PASSWORD){
                    res.status(403).send({ error: "you need the admin password to create admin user" });
                    return;
                }
            }
            // check if username already exists
            const player = await fetchPlayer(username);
            if (player) {
                res.status(401).send({ error: "username already exists" });
                return;
            }
            // hash the password with 10 rounds
            const hashedPassword = await bcrypt.hash(password, 10);
        
            // add the new player to the players database
            const newPlayer = await insertPlayer(username, hashedPassword, role);
        
            // create token with player details (no password)
            const payload = {
                username: newPlayer.username,
                role: newPlayer.role
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
            res.send({ message: "player signed up successfully", player: newPlayer, token: token });
    } catch (error) {
        res.status(500).json({ error: `Error creating player: ${error.message}` });
    }
}