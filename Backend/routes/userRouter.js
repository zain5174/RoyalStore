import express from "express"
import {createUser,getusers,deleteusers} from "../controllers/userController.js"
const router = express.Router()
router.post("/createuser",createUser)
router.get("/getusers",getusers)
router.delete("/deleteusers/:id",deleteusers)
export default router