import express, { urlencoded } from "express";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();

// Routes
import userRoutes from "./Routes/User.Routes.js";
import { btbConnection } from "./Config/DB.Connection.js";

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

// Server
app.listen(port, () => {
    console.log(`App listening port ${port}`.cyan);
})