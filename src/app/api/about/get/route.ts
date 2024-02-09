import { connectDB } from "@/database";
import { About } from "@/models/About";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectDB();
    const data = await About.findOne();

    if (data !== null) {
      return NextResponse.json(data, { status: 200 },);
    } else {
      return NextResponse.json({ message: "ERROR" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
