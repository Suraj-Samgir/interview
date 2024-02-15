import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export const Users = mongoose.models.users || mongoose.model("users", userModel);