import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { conStr } from "@/utils/db";
import { Users } from "@/utils/models/model_user";


export async function POST(req) {
    try {
        const { email, password } = await req.json();
        console.log(email + " " + password);
        await mongoose.connect(conStr);

        const user = await Users.findOne({ email, password});

        console.log (user);

        if (!user) {
            return NextResponse.json({ message: "Invalid Username or Password" , success: false });
        }

        return NextResponse.json({ user, success: true });

    } catch (error) {
        return NextResponse.json({ message: "An error occurred" , success: false });
    }

}