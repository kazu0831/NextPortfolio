import { connectDB } from "@/database";
import { Skill } from "@/models/Skill";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const data = await req.json();
    const submitData = await Skill.create(data);

    if (submitData) {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
