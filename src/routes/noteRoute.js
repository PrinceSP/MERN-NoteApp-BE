import express from "express";
import { getNote, createNote, updateNote, deleteNote } from "../controllers/noteControllers.js";

const router = express.Router()

router.get("/",getNote)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router