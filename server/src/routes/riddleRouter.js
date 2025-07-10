import express from "express";
import { sendAllRiddles } from "../controllers/riddleControllers.js";
// router for handling with riddles

// initialize router
const router = express.Router();

router.get("/", sendAllRiddles);

export default router;