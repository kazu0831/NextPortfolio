import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
  },
  { timestamps: true }
);

export const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);
