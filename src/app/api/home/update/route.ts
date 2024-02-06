import { connectDB } from "@/database";
import { Home } from "@/models/Home";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { id, title, subtitle } = await req.json();

    const updateData = await Home.findByIdAndUpdate(id, { title, subtitle });
    return NextResponse.json(updateData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
