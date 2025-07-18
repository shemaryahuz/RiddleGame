// router for endpoints of riddles route

import express from "express";
import { addNewRiddle, sendAllRiddles, sendRiddle, updateRiddleById } from "../controllers/riddleControllers.js";
import { validateRiddle, validateRiddleId } from "../middlewares/riddleMiddlewares.js";


// initialize router
const router = express.Router();

// if route is '/riddles' validate and send all riddles
router.get("/", sendAllRiddles);

// if route is '/riddles/:riddleId', send the riddle by id
router.get("/:riddleId", validateRiddleId , sendRiddle);

// if route is '/riddles/addRiddle', create new riddle
router.post("/addRiddle", validateRiddle, addNewRiddle);

// if route is '/riddles/:riddleId' with PUT method, update the riddle by id
router.put("/:riddleId", validateRiddleId, validateRiddle, updateRiddleById);

// // if route is '/riddles/:riddleId' with DELETE method, delete the riddle by id
// router.delete("/:riddleId", deleteRiddle);

export default router;