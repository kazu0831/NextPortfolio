import { connectDB } from "@/database";
import { Skill } from "@/models/Skill";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const data = await Skill.findOne();

    if (data !== null) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
