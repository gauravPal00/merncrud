import express from 'express'
import { addUser, deleteData, getUsers,getupdate } from '../controller/userController.js';

const router = express.Router()

router.post("/add",addUser)
router.get("/get",getUsers)
router.delete("/delete/:id",deleteData)
router.put("/update/:id",getupdate)

export default router;