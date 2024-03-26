import mongoose from "mongoose";
const { Schema } = mongoose;

const VehicleSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },

    type:{
        type: String,
        required:true
    },

    mfy:{
        type: String,
        required:true
    },

    millage:{
        type: Number,
        required:true
    },

    photos:{
        type: [String]
    },

    desc:{
        type: String,
        required:true
    },

    price:{
        type: Number,
        required:true
    },

    location:{
        type: String,
        required:true
    },

    parts:{
        type:[String]
    },

    featured:{
        type: Boolean,
        default:false
    },

    edition:{
        type: String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    }
});

export default mongoose.model("Vehicle",VehicleSchema)