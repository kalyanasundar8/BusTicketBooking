import express from "express";
import { createBus } from "../Controllers/Bus.Controller.js";

const busRoutes = express.Router();

busRoutes.post("/createBus", createBus);

export default busRoutes;
