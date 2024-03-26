import Jwt from "jsonwebtoken"
import { creatError } from "./error.js"

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(creatError(401,"You are not authenticated!"));
    }

    Jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)  return next(creatError(403,"Token is not valid!"));
        req.user = user;
        next()

    });
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
              return next(creatError(403,"You are not authorized!"));
        }
    });
};

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
              return next(creatError(403,"You are not authorized!"));
        }
    });
};