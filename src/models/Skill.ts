import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema(
  {
    skills: String,
  },
  { timestamps: true }
);

export const Skill =
  mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
