import Tasks from "../schema/schema.js";
import tasks from "../data/data.js";

const addTasks=async(req,res)=>{
 const data=tasks
const input= await Tasks.insertMany(data)
if(!input|| input.length===0){
    return res.status(400).json({
        message:"Failed to add the data"
    })
}
return res.status(200).json({
    message:"Data added successfully"
})
}
const getTasks=async(req,res)=>{
    return res.status(200).json({
        message:"Tasks fetched successfully"
    })
}
export {addTasks,getTasks}