import express from "express"
import Vehicle from "../models/vehicle.js";
import { set } from "mongoose";
import { creatError } from "../utils/error.js";
import { countByEdition, countByType, createVehicle, deleteVehicle, getVehicle, getVehicles, updateVehicle } from "../controllers/vehicle.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//create
router.post("/",verifyAdmin, createVehicle);

//update
router.put("/:id",verifyAdmin, updateVehicle);

//delete
router.delete("/:id",verifyAdmin, deleteVehicle);

//get
router.get("/find/:id", getVehicle);

//get all
router.get("/", getVehicles);
router.get("/countByEdition", countByEdition);
router.get("/countByType", countByType);

export default router;