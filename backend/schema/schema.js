import mongoose from "mongoose";

const schema= mongoose.Schema

const taskSchema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:Boolean
    }

})
// taskSchema.index({_id:1}) becauser _id is already indexed by default
const Tasks= mongoose.model("taskSchema",taskSchema)

export default Tasks