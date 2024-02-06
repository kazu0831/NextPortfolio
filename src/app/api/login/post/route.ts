import { connectDB } from "@/database";
import { User } from "@/models/User";
import { compare, hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: NextResponse) => {
  try {
    await connectDB();
    const { username, password } = await req.json();
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "ユーザーが存在しません",
      });
    }

    const hashPass = await hash(user.password, 12);
    const varifyPass = await compare(password, hashPass);

    if (!varifyPass) {
      return NextResponse.json({
        success: false,
        message: "パスワードが異なります",
      });
    }

    return NextResponse.json({
      success: true,
      message: "ログインしました",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "ERROR" }, { status: 500 });
  }
};
