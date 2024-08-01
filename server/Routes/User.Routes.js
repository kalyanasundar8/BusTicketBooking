import express from "express";
const userRoutes = express.Router();

// Controllers
import { register } from "../Controllers/User.Controller.js";

// Routes
userRoutes.post("/register", register);

export default userRoutes;