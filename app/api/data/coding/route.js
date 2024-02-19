import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET() {
    let data = []
    const client = new MongoClient('mongodb+srv://manthankhawse:manthan123@dsamcq.lzfnxei.mongodb.net/DSA?retryWrites=true&w=majority');
    try {
        await client.connect();
        const database = client.db('DSA');
        const collection = database.collection('coding');
        data = await collection.find({}).toArray();
        
    } catch (error) {
        return NextResponse.json({message :error.message, client : dataStr});
        console.log(error)
    }
    await client.close();
    return NextResponse.json({ data, success: true });
}