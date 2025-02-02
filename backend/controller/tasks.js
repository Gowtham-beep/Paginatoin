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
    const{cursor,limit=10}=req.query
    const pageSize=parseInt(limit,10)
    try {
        let query={}
        if(cursor){
            query={_id:{$gt:cursor}}
        }
        const tasks= await Tasks.find(query)
        .sort({_id:1})
        .limit(pageSize)

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({
                message: "No more tasks found",
            });
        }
        const nextCursor= tasks[tasks.length-1]._id
        return res.status(200).json({
            message:"Tasks fetched successfully",
            data:tasks,
            nextCursor
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
export {addTasks,getTasks}