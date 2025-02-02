import mongoose from "mongoose";

const DBconnection=async()=>{
    mongoose.connect(process.env.DB_URL)
    .then(console.log("Database connected"))
}
export default DBconnection