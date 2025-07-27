// router for endpoints of playeres route ('players/me' for 'user'/'admin',  '/players' for 'admin')
import express from "express";
import { 
    addNewPlayer, 
    deletePlayerByUsername,
    sendAllPlayers,
    sendPlayer,
    updatePlayerScores,
    updatePlayerUsername 
} from "../controllers/playerController.js";

import { 
    setMyOldName,
    setMyUsername,
    setMyUsernameInBody,
    validateScores,
    validateUsername 
} from "../middlewares/playerMiddleware.js";

import { 
    authenticateToken,
    authorizeRole 
} from "../middlewares/authMiddleware.js";


// initialize router
const router = express.Router();

// if route is '/players/me' send user his owm details
router.get("/me",
    authenticateToken,
    authorizeRole("user", "admin"),
    setMyUsername,
    sendPlayer
);

// if route is '/players/me/updateScores' with 'PUT' method,  update user's scores
router.put("/me/updateScores",
    authenticateToken,
    authorizeRole("user", "admin"),
    setMyUsernameInBody,
    updatePlayerScores
);

// if route is '/players/me/updateUsername' with 'PUT' method,  update username
router.put("/me/updateUsername",
    authenticateToken,
    authorizeRole("user", "admin"),
    setMyOldName,
    updatePlayerUsername
);

// if route is '/players/me/deletePlayer' with DELETE method, delete player
router.delete("/me/deletePlayer",
    authenticateToken,
    authorizeRole("user", "admin"),
    setMyUsername,
    deletePlayerByUsername
);

// if route is '/players' and user's role is 'admin', send all players
router.get("/", 
    authenticateToken, 
    authorizeRole("admin"),
    sendAllPlayers
);

// if route is '/players/:username' and user's role is 'admin' or 'user', send player
router.get("/:username",
    authenticateToken,
    authorizeRole("admin"),
    sendPlayer
);

// if route is '/players/addPlayer' with POST method, create player
router.post("/addPlayer",
    authenticateToken, 
    authorizeRole("admin"),
    validateUsername,
    addNewPlayer
);

// if route is '/players/updateScore' with PUT method, update player's best time and score
router.put("/updateScores",
    authenticateToken, 
    authorizeRole("admin"),
    validateUsername,
    validateScores,
    updatePlayerScores
);

// if route is '/players/updateUsername/:oldName' with PUT method, update player's username
router.put("/updateUsername/:oldName",
    authenticateToken, 
    authorizeRole("admin"),
    validateUsername,
    updatePlayerUsername
);

// if route is '/players/deletePlayer/:username' with DELETE method, delete player
router.delete("/deletePlayer/:username",
    authenticateToken, 
    authorizeRole("admin"),
    deletePlayerByUsername
);

export default router;