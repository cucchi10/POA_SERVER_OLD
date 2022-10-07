import express from "express";
import morgan from "morgan";
import config from "./config";
import { cors } from "./cors";
// Routes
import testRoutes from "./routes/testRoutes";
// import postRoutes from "./routes/postRoutes";
// import userRoutes from "./routes/userRoutes";

const app = express();

// Static
//app.use(express.static('public'))

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors);

// Routes
//app.use("/users", userRoutes);
//app.use("/posts", postRoutes);
app.use("/", testRoutes)

export default app;
