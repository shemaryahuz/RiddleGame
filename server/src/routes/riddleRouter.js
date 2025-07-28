// router for endpoints of riddles route

import express from "express";

import {
    authenticateToken,
    authorizeRole
} from "../middlewares/authMiddleware.js";

import {
    addNewRiddle,
    deleteRiddleById,
    sendAllRiddles,
    sendRiddle,
    updateRiddleById
} from "../controllers/riddleController.js";

import {
    validateRiddle,
    validateRiddleId
} from "../middlewares/riddleMiddleware.js";


// initialize router
const router = express.Router();

// if route is '/riddles' validate and send all riddles
router.get("/",
    authenticateToken,
    authorizeRole("user", "admin"),
    sendAllRiddles
);

// if route is '/riddles/:riddleId', send the riddle by id
router.get("/:riddleId",
    authenticateToken,
    authorizeRole("user", "admin"),
    validateRiddleId, 
    sendRiddle
);

// if route is '/riddles/addRiddle', create new riddle
router.post("/addRiddle",
    authenticateToken,
    authorizeRole("user", "admin"),
    validateRiddle,
    addNewRiddle
);

// if route is '/riddles/:riddleId' with PUT method, update the riddle by id
router.put("/:riddleId",
    authenticateToken,
    authorizeRole("admin"),
    validateRiddleId,
    validateRiddle,
    updateRiddleById
);

// if route is '/riddles/:riddleId' with DELETE method, delete the riddle by id
router.delete("/:riddleId",
    authenticateToken,
    authorizeRole("admin"),
    validateRiddleId,
    deleteRiddleById
);

export default router;