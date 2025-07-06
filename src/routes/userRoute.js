import express from "express";
import { getAllUser, getUserById, createUser, updateUserById, deleteUserById } from "../controllers/userControllers.js";

const router = express.Router()

router.get("/", getAllUser)
router.get("/:id", getUserById)
router.post("/", createUser)
router.put("/:id", updateUserById)
router.delete("/:id", deleteUserById)

export default router