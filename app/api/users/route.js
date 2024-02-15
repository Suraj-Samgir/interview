import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { conStr } from "@/utils/db";
import { Users } from "@/utils/models/model_user";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(conStr);
        data = await Users.find();
    } catch (error) {
        data = { success: false }
    }
    return NextResponse.json({ data, success: true });
}

export async function POST(req) {
    try {
        const data = await req.json();
        await mongoose.connect(conStr);
        let user = new Users(data);
        console.log(user);
        await user.save();
        
        return NextResponse.json({ user, success: true });

    } catch (error) {
        return NextResponse.json({ success: false });
    }
}