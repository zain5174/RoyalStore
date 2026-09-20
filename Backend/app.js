import express from "express";
import cors from "cors";
import { dbConnect } from "./db/db.js";
import jokesRoute from "./routes/jokesRoute.js";
import userRouter from "./routes/userRouter.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running");
});
dbConnect();
app.use("/api", jokesRoute);
app.use("/api",userRouter);
export default app;