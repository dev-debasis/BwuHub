import { Post } from "@/model/post-model";
import mongoose from "mongoose";

export async function createPosts(post){
    try{
        console.log(post);
        await Post.create(post);
    }catch(err){
        throw new Error(err);
    }
}

// Get all posts or filter by user ID
export const getAllPosts = async (userId = null) => {
//   const query = userId ? { author: userId } : {};
  //const posts = await Post.find({"author": "123"});
  

// const posts = await Post.find({ author: new mongoose.Types.ObjectId("123456789012345678901234") });

    const posts = await Post.find();

  return posts;
};
