import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Prompt from "@/models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    console.log(params)
    const prompts = await Prompt.find({ creator: params.id }).populate('creator')
    return NextResponse.json(prompts, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      "Failed to fetch Data" ,
      { status: 500 }
    );
  }
};
