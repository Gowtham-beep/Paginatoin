import { Router } from "express";
import { addTasks,getTasks } from "../controller/tasks.js";

const router=Router()

router.post("/addtasks",addTasks)
router.get("/gettasks",getTasks)

export default router