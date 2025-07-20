import express from "express";
import { addNewPlayer, sendAllPlayers, sendPlayer } from "../controllers/playerControllers.js";
// router for handling with playeres

// initialize router
const router = express.Router();

// if route is '/players', send all players
router.get("/", sendAllPlayers);

// if route is '/players/:username', send player
router.get("/:username", sendPlayer);

// if route is '/players/addPlayer' with POST method, create player
router.post("/addPlayer", addNewPlayer);

export default router;