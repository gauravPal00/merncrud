import express from 'express'
import { addUser, deleteData, getUsers,updateUser } from '../controller/userController.js';

const router = express.Router()

router.post("/add",addUser)
router.get("/get",getUsers)
router.delete("/delete/:id",deleteData)
router.put("/update/:id",updateUser)

export default router;