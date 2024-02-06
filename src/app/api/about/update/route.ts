import { connectDB } from "@/database";
import { About } from "@/models/About";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { id, name, age, education, message } = await req.json();

    const updateData = await About.findByIdAndUpdate(id, {
      name,
      age,
      education,
      message,
    });
    return NextResponse.json(updateData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
