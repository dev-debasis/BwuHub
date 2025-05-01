import { Post } from "@/model/post-model";

export async function createUser(post){
    try{
        await Post.create(post);
    }catch(err){
        throw new Error(err);
    }
}