import { connectDB } from "@/database";
import { Projects } from "@/models/Projects";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { id, project, stack, webURL, githubURL } = await req.json();

    const updateData = await Projects.findByIdAndUpdate(id, {
      project,
      stack,
      webURL,
      githubURL,
    });
    return NextResponse.json(updateData);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
