import express from "express";
import { createBus, getBus } from "../Controllers/Bus.Controller.js";

const busRoutes = express.Router();

busRoutes.post("/createBus", createBus);
busRoutes.get("/getBus", getBus);

export default busRoutes;
