import express from "express"
import {updateUser,deleteUser,getUser,getUsers} from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken, (req,res,next)=>{
    res.send("Hello user, you are logged in")
})

router.get("/checkuser/:id",verifyUser, (req,res,next)=>{
    res.send("Hello user, you are logged in and you can control your account")
})

router.get("/checkadmin/:id",verifyAdmin, (req,res,next)=>{
    res.send("Hello admin, you are logged in and you can control all accounts")
}) 


//update
router.put("/:id",verifyUser, updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);

//get
router.get("/:id",verifyUser, getUser);

//get all
router.get("/",verifyAdmin, getUsers);

export default router