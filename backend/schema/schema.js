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

const Tasks= mongoose.model("taskSchema",taskSchema)

export default Tasks