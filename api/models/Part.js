import mongoose from "mongoose";
const { Schema } = mongoose;

const PartSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },

    price:{
        type: Number,
        required:true,
    },

    availableAmount:{
        type: Number,
        required:true,
    },

    desc:{
        type: String,
        required:true
    },

    partNumber:[{number:Number}],

},
{timestamps:true}
);

export default mongoose.model("Part",PartSchema)