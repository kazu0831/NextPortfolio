import mongoose from "mongoose";

export const connectDB = async () => {
  const url = process.env.NEXT_PUBLIC_DB_URL as string
  try {
    await mongoose.connect(
      url
    );
    console.log("DBに接続しました");
  } catch (err) {
    console.log(err);
  }
};
