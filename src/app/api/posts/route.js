import { dbConnect } from "@/lib/mongo";
import Post from "@/";
import { getAuthUser } from "@/lib/auth";

export const POST = async (request) => {
  await dbConnect();
  const user = await getAuthUser(request);
  if (!user) return new Response("Unauthorized", { status: 401 });

  const body = await request.json();
  const { title, content, tags, eventDateTime, location, imageUrl } = body;

  const newPost = new Post({
    author: user._id,
    authorAvatar: user.userAvatar,
    title,
    content,
    tags,
    eventDateTime,
    location,
    imageUrl
  });

  try {
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
};
