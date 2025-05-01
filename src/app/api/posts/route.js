import { NextResponse } from "next/server";
import { createPosts } from "@/queries/posts";
import { dbConnect } from "@/lib/mongo";
import { log } from "console";

export const POST =  async (request) => {
    const {userid, title, content, tags} = await request.json();
    console.log("--------------------------------------------------------------")
    console.log("CHECK",userid)


    // Create a DB Connection
    await dbConnect();
    
    // Form a DB payload
    const newPost = {
        _id: userid,
        title,
        content,
        tags,
    }

    // Update the DB
    try{
        await createPost(newPost);
    }catch(err){
        console.log(err.message);
        return new NextResponse(err.message, {
            status: 500,
        });
    }

    return new NextResponse('Post has been created', {
        status: 201,
    });

}
