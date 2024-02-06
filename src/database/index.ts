import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kazz:Mekakusi30@cluster0.6aspsru.mongodb.net/"
    );
    console.log("DBに接続しました");
  } catch (err) {
    console.log(err);
  }
};
