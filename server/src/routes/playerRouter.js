// router for endpoints of playeres route
import express from "express";
import { addNewPlayer, deletePlayerByUsername, sendAllPlayers, sendPlayer, updatePlayerScores, updatePlayerUsername } from "../controllers/playerController.js";
import { validateScores, validateUsername } from "../middlewares/playerMiddleware.js";
import { authenticateToken, authorizeRole } from "../middlewares/authMiddleware.js";


// initialize router
const router = express.Router();

// if route is '/players' and user's role is 'admin', send all players
router.get("/", authenticateToken, authorizeRole("admin"), sendAllPlayers);

// if route is '/players/:username' and user's role is 'admin' or 'user', send player
router.get("/:username", authenticateToken, authorizeRole("user", "admin"), sendPlayer);

// if route is '/players/addPlayer' with POST method, create player
router.post("/addPlayer", validateUsername, addNewPlayer);

// if route is '/players/updateScore' with PUT method, update player's best time and score
router.put("/updateScores", validateUsername, validateScores, updatePlayerScores);

// if route is '/players/updateUsername/:oldName' with PUT method, update player's username
router.put("/updateUsername/:oldName", validateUsername, updatePlayerUsername);

// if route is '/players/deletePlayer/:username' with DELETE method, delete player
router.delete("/deletePlayer/:username", deletePlayerByUsername);

export default router;