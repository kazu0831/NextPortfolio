import { connectDB } from "@/database";
import { Projects } from "@/models/Projects";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
  try {
    await connectDB();

    const url = req.url;
    const id = url?.split("?id=")[1];

    const data = await Projects.findById(id);

    if (data) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
