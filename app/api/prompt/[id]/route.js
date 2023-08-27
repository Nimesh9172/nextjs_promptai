import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import Prompt from "@/models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompts) return NextResponse.json("Prompt Not Found", { status: 404 });
    return NextResponse.json(prompts, { status: 201 });
  } catch (error) {
    return NextResponse.json(
       "Failed to fetch Data",
      { status: 500 }
    );
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existingPrompt)
      return NextResponse.json("Prompt Not Found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return NextResponse.json(existingPrompt, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      "Failed to Update Prompt",
      { status: 500 }
    );
  }
};

export const DELETE = async (request,{params}) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id)
    return NextResponse.json("Failed to delete prompt", { status: 201 });
  } catch (error) {
    return NextResponse.json(
       "Failed to Delete Prompt",
      { status: 500 }
    );
  }
}