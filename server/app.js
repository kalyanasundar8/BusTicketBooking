import express, { urlencoded } from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

import { btbConnection } from "./Config/DB.Connection.js";
// Routes
import userRoutes from "./Routes/User.Routes.js";
import ticketsRoutes from "./Routes/Ticket.Routes.js";
import busRoutes from "./Routes/Bus.Routes.js";

// App
const app = express();

// DB
btbConnection();

// Port
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/buses", busRoutes);

// Server
app.listen(port, () => {
    console.log(`App listening port ${port}`.cyan);
})