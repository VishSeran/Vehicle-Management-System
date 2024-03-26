import Part from "../models/part.js";
import Vehicle from "../models/vehicle.js"
import { creatError } from "../utils/error.js";

export const createPart = async (req,res,next)=>{

    const vehicleId = req.params.vehicleid;
    const newPart = new Part(req.body);

    try{
        const savedPart = await newPart.save();
        try{
            await Vehicle.findByIdAndUpdate(vehicleId, {$push: {parts: savedPart._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedPart);
    }catch(err){
        next(err);
    }

}

export const updatePart = async (req,res,next)=>{
    try{
        const updatedPart = await Part.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updatedPart);

    }catch(err){
        next(err);
    }
}

export const deletePart = async (req,res,next)=>{

    const vehicleId = req.params.vehicleid;
    try{
        await Part.findByIdAndDelete(req.params.id);
        try{
            await Vehicle.findByIdAndUpdate(vehicleId, {$pull: {parts: req.params.id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json("Part Has Been Deleted!")

    }catch(err){
        next(err);
    }
}

export const getPart = async (req,res,next)=>{
    try{
        const part = await Part.findById(req.params.id);
        res.status(200).json(part)

    }catch(err){
        next(err);
    }
}

export const getParts = async (req,res,next)=>{
    try{
        const parts = await Part.find();
        res.status(200).json(parts);

    }catch(err){
        next(err);
    }
}

export const countByTitle = async (req,res,next)=>{

    const titles = req.query.titles.split(",")
    try{
        const list = await Promise.all(titles.map(title=>{
            return Part.countDocuments({title:title})
        }))
        res.status(200).json(list);

    }catch(err){
        next(err);
    }
}
