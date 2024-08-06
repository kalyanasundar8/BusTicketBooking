import express from "express";
import { bookTicket } from "../Controllers/Tickets.Controller.js";

const ticketsRoutes = express.Router();

ticketsRoutes.post("/bookTicket", bookTicket);

export default ticketsRoutes;