import express from "express";
import { addNewRiddle, sendAllRiddles, sendRiddle } from "../controllers/riddleControllers.js";
// router for handling with riddles

// initialize router
const router = express.Router();

// if route is '/riddles' send all riddles
router.get("/", sendAllRiddles);
// if route is '/riddles/:riddleId', send the riddle by id
router.get("/:riddleId", sendRiddle);
// if route is '/riddles/addRiddle', create new riddle
router.post("/addRiddle", addNewRiddle);

export default router;