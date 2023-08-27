import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  console.log(userId, prompt, tag )
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator:userId,
      prompt,
      tag
    })

    await newPrompt.save()
    
    return NextResponse.json({message:newPrompt},{status:201})


  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"Failed to create a new prompt"},{status:500})
  }
};
