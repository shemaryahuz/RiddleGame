// handlers for player route
import { fetchAllPlayers, fetchPlayer, insertPlayer } from "../dal/playerDAL.js";

export async function sendAllPlayers(req, res) {
    // get the players from the database
    try {
        const players = await fetchAllPlayers();
        // if empty array returned, response with error
        if (!players.length){
            res.status(404).send({ error: "players array not found" });
            return;
    }
    res.send(players);
    } catch (error) {
        res.status(404).send({ error: `Error fetcimg players: ${error.message}` });
    }
}

export async function sendPlayer(req, res) {
    // destruct username from request params
    const { username } = req.params;
    // get the player by username
    try {
        const player = await fetchPlayer(username);
        // if player array is empty, response message and status code of 'not found'
        if (!player.length){
            res.status(404).send({ error: "player username not found" });
            return;
        }
        // if found, response with the player
        res.send(player[0]);

    } catch (error) {
        res.status(404).send({ error: `Error fetcing player: ${error.message}` });
    }
}

export async function addNewPlayer(req, res) {
    try {
        // destruct the player from request body
        const { username } = req.body;
        // if body format is invalid, response with error
        if (!username){
            res.status(404).send({ error: "body is malformed" });
            return;
        }
        // add the new player and get the created player with its id
        const createdPlayer = await insertPlayer(username);
        // if added, response with succeded message and the created player
        res.send({ message: "player added successfuly", player: createdPlayer });
    } catch (error) {
        res.status(404).json({ error: `Error adding player: ${error.message}` });
    }
}