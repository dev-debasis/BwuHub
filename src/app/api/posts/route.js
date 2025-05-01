import { NextResponse } from "next/server";
import { createPosts, getAllPosts } from "@/queries/posts";
import { dbConnect } from "@/lib/mongo";

export const POST =  async (request) => {
    const {userid, title, content, tags} = await request.json();
    // console.log("--------------------------------------------------------------")
    // console.log("CHECK",userid)


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
        await createPosts(jsonToFormData(newPost));
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


function jsonToFormData(json) {
    const formData = new FormData();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        formData.append(key, json[key]);
      }
    }
    return formData;
}
  
export const GET = async () => {
    try {
      await dbConnect();
  
    //   const { searchParams } = new URL(request.url);
    //   const author = searchParams.get("author"); // optional filter
  
      const posts = await getAllPosts(); // pass to query function
  
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error("Error fetching posts:", error);
      return new NextResponse("Failed to fetch posts", { status: 500 });
    }
};
  