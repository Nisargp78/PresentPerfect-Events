import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI , { dbName: "PresentPerfect"})
    .then(() =>{
        console.log("connected to database!");
    })
    .catch((err) =>{
        console.log("Some error while connecting to database!",err);
    });
};