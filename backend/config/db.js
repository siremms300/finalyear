import mongoose from "mongoose";

// export const connectDB = async()=>{
//     await mongoose.connect('').then(()=>console.log("DB Connected"))
// }


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://thedenafrica:SX7ueRBTKptZ6vNB@cluster0.5uknn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"))
}