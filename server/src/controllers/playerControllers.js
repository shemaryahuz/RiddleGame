// handlers for player route
import { fetchAllPlayers, fetchPlayer, fetchScores, insertPlayer, updateScores, updateUsername } from "../dal/playerDAL.js";

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
        // if player is null, response message and status code of 'not found'
        if (!player){
            res.status(404).send({ error: "player username not found" });
            return;
        }
        // if found, response with the player
        res.send(player);

    } catch (error) {
        res.status(404).send({ error: `Error fetcing player: ${error.message}` });
    }
}

export async function addNewPlayer(req, res) {
    try {
        // destruct the username from request body
        const { username } = req.body;
        // add the new player and get the created player with its id
        const createdPlayer = await insertPlayer(username);
        // if added, response with succeded message and the created player
        res.send({ message: "player added successfuly", player: createdPlayer });
    } catch (error) {
        res.status(404).send({ error: `Error adding player: ${error.message}` });
    }
}

export async function updatePlayerScores(req, res) {
    try {
            // destruct username from requests body
            const { username } = req.body;
            // fetch current score and current best time
            const currentScores = await fetchScores(username);
            // if currentScores is null, response with 'not found'
            if (!currentScores){
                res.status(404).send({ error: "username not found" });
                return;
            }
            const curScore = currentScores.score;
            const curBestTime = currentScores.best_time;
            // destruct score and time from request body
            let { score, bestTime } = req.body;
            score += curScore;
            // if current best time is less than the new beast time, keep  best time with the same value
            if (curBestTime !== 0 && curBestTime < bestTime){
                bestTime = curBestTime;
            }
            // update player scores
            const updatedPalyer = await updateScores(username, score, bestTime);
            res.send({ message: "player updated successfully", player: updatedPalyer });
    } catch (error) {
        res.status(404).send({ error: `Error updating scores: ${error.message}` });
    }
}

export async function updatePlayerUsername(req, res) {
    // destruct username from request params
    const { oldName } = req.params;
    // destruct new name frome request body
    const { username } = req.body;
    // get the player by username
    try {
        const updatedPalyer = await updateUsername(oldName, username);
        // if player is null, response message and status code of 'not found'
        if (!updatedPalyer){
            res.status(404).send({ error: "player username not found" });
            return;
        }
        // if found, response with the player
        res.send({ message: "player updated successfully", player: updatedPalyer });

    } catch (error) {
        res.status(404).send({ error: `Error updating player: ${error.message}` });
    }
}