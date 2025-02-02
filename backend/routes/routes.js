import { Router } from "express";

const router=Router()

router.post("/addtasks",addTasks)
router.get("/gettasks",getTasks)

export default router