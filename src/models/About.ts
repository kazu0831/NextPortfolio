import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    name: String,
    age: String,
    education: String,
    message: String,
  },
  { timestamps: true }
);

export const About =
  mongoose.models.About || mongoose.model("About", AboutSchema);
