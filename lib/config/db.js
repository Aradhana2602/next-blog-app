import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Aradhana:ara_dhana_201@cluster0.9gkmk.mongodb.net/blog-app')
    console.log("DB Connected");
}
