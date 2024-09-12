import db from "@/libs/db";
import { NextResponse } from "next/server"

export const GET = async () => {
    try{
        const allTasks = await db.task.findMany();
        return new NextResponse(JSON.stringify(allTasks), {status: 200})
    } catch(e){
        return new NextResponse(`Error: ${e}`, {status: 500})
    }
}

export const POST = async (req : Request ) => {
    try{
        const {title , description , status } = await req.json();
        const task = await db.task.create({
            data: {
                title: title,
                description: description,
                status: status,
            }
        })
        return new Response(JSON.stringify(task), {status: 200})

    } catch(e){
        return new Response("error", {status: 500});
    }
}
