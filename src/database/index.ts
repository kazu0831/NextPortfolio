import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://kukuaice:Mekakusi30@cluster0.waliqln.mongodb.net/"
    );
    console.log("DBに接続しました");
  } catch (err) {
    console.log(err);
  }
};
