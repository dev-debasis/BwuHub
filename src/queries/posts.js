import { Post } from "@/model/post-model";

export async function createPosts(post){
    try{
        await Post.create(post);
    }catch(err){
        throw new Error(err);
    }
}