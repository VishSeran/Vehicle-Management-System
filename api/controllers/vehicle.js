import Vehicle from "../models/vehicle.js";

export const createVehicle = async (req,res,next)=>{
    const newVehicle = new Vehicle(req.body)

    try{
        const savedVehicle = await newVehicle.save()
        res.status(200).json(savedVehicle)

    }catch(err){
        next(err);
    }
}

export const updateVehicle = async (req,res,next)=>{
    try{
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
        res.status(200).json(updatedVehicle);

    }catch(err){
        next(err);
    }
}

export const deleteVehicle = async (req,res,next)=>{
    try{
        await Vehicle.findByIdAndDelete(req.params.id);
        res.status(200).json("Vehicle Has Been Deleted!")

    }catch(err){
        next(err);
    }
}

export const getVehicle = async (req,res,next)=>{
    try{
        const vehicle = await Vehicle.findById(req.params.id);
        res.status(200).json(vehicle)

    }catch(err){
        next(err);
    }
}

export const getVehicles = async (req,res,next)=>{

    const {min,max, ...others} = req.query;
    try{
        const vehicles = await Vehicle.find({...others,price:{$gt:min || 1, $lt:max || 99999999}}).limit(req.query.limit);
        res.status(200).json(vehicles);

    }catch(err){
        next(err);
    }
}

export const countByEdition = async (req,res,next)=>{

    const editions = req.query.editions.split(",")
    try{
        const list = await Promise.all(editions.map(edition=>{
            return Vehicle.countDocuments({edition:edition})
        }))
        res.status(200).json(list);

    }catch(err){
        next(err);
    }
}

export const countByType = async (req,res,next)=>{

    try{

        const cranksharftCount = await Vehicle.countDocuments({type:"cranksharft"});
        const turboCount = await Vehicle.countDocuments({type:"turbo"});
        const exhaustCount = await Vehicle.countDocuments({type:"exhaust"});
        const brakesCount = await Vehicle.countDocuments({type:"brakes"});
        const engineCount = await Vehicle.countDocuments({type:"engine"});

        res.status(200).json([
            {type:"cranksharft", count: cranksharftCount},
            {type:"turbo", count: turboCount},
            {type:"exhaust", count: exhaustCount},
            {type:"brakes", count: brakesCount},
            {type:"engine", count: engineCount},
        ]);

    }catch(err){
        next(err);
    }
}