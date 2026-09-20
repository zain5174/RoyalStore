import express from "express";

const router = express.Router();

import {createJokes,getJokes} from "../controllers/jokesController.js";

//router.get("/jokes", getJokes);

router.post("/jokes", createJokes);
router.get("/jokes", getJokes);

export default router;
