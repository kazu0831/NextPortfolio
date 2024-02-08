import { connectDB } from "@/database";
import { Projects } from "@/models/Projects";
import { NextResponse } from "next/server";

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { id } = await req.json();

    await Projects.deleteOne({_id: id})

    return NextResponse.json({message: 'SUCCESS'})
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};

