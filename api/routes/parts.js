import express from "express";
import { countByTitle, createPart, deletePart, getPart, getParts, updatePart } from "../controllers/part.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin, createPart);

//update
router.put("/:id",verifyAdmin, updatePart);

//delete
router.delete("/find/:id",verifyAdmin, deletePart);

//get
router.get("/:id", getPart);

//get all
router.get("/", getParts);
router.get("/countByTitle", countByTitle);


 
export default router