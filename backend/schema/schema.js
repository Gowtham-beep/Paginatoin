import mongoose from "mongoose";

const schema= mongoose.schema

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

const Tasks= mongoose.model("taskSchema",Tasks)

export default Tasks