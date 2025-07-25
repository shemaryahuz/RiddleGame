// router for endpoints of playeres route
import express from "express";
import { addNewPlayer, deletePlayerByUsername, sendAllPlayers, sendPlayer, updatePlayerScores, updatePlayerUsername } from "../controllers/playerControllers.js";
import { validateScores, validateUsername } from "../middlewares/playerMiddlewares.js";


// initialize router
const router = express.Router();

// if route is '/players', send all players
router.get("/", sendAllPlayers);

// if route is '/players/:username', send player
router.get("/:username", sendPlayer);

// if route is '/players/addPlayer' with POST method, create player
router.post("/addPlayer", validateUsername, addNewPlayer);

// if route is '/players/updateScore' with PUT method, update player's best time and score
router.put("/updateScores", validateUsername, validateScores, updatePlayerScores);

// if route is '/players/updateUsername/:oldName' with PUT method, update player's username
router.put("/updateUsername/:oldName", validateUsername, updatePlayerUsername);

// if route is '/players/deletePlayer/:username' with DELETE method, delete player
router.delete("/deletePlayer/:username", deletePlayerByUsername);

export default router;