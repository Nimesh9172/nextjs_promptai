import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Prompt from "@/models/prompt";

export const GET = async () => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate('creator');
    return NextResponse.json(prompts, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      "Failed to fetch Data" ,
      { status: 500 }
    );
  }
};


