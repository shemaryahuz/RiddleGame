// router for authentication routes
import express from "express";
import { login, signup } from "../controllers/authController.js";

const router = express.Router();

// if route is 'auth/login', call login controller
router.post("/login", login);

// if route is 'auth/signup', call signup controller
router.post("/signup", signup);

export default router;