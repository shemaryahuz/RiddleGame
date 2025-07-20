// router for endpoints of playeres route
import express from "express";
import { addNewPlayer, sendAllPlayers, sendPlayer, updatePlayerScores } from "../controllers/playerControllers.js";
import { validateScores, validateUsername } from "../middlewares/playerMiddlewares.js";


// initialize router
const router = express.Router();

// if route is '/players', send all players
router.get("/", sendAllPlayers);

// if route is '/players/:username', send player
router.get("/:username", sendPlayer);

// if route is '/players/addPlayer' with POST method, create player
router.post("/addPlayer", validateUsername, addNewPlayer);

// if route is '/players/updateScore/:username' with PUT method, update player's best time and score
router.put("/updateScores/", validateUsername, validateScores, updatePlayerScores);

export default router;