import { connectDB } from "@/database";
import { Skill } from "@/models/Skill";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { id, skills } = await req.json();

    const updateData = await Skill.findByIdAndUpdate(id, { skills });
    return NextResponse.json(updateData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
