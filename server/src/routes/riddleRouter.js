import express from "express";
import { addNewRiddle, deleteRiddle, sendAllRiddles, sendRiddle, updateRiddle } from "../controllers/riddleControllers.js";
// router for handling with riddles

// initialize router
const router = express.Router();

// if route is '/riddles' send all riddles
router.get("/", sendAllRiddles);
// if route is '/riddles/:riddleId', send the riddle by id
router.get("/:riddleId", sendRiddle);
// if route is '/riddles/addRiddle', create new riddle
router.post("/addRiddle", addNewRiddle);
// if route is '/riddles/:riddleId' with PUT method, update the riddle by id
router.put("/:riddleId", updateRiddle);
// if route is '/riddles/:riddleId' with DELETE method, delete the riddle by id
router.delete("/:riddleId", deleteRiddle);

export default router;