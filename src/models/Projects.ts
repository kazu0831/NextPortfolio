import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema(
  {
    project: String,
    stack: String,
    webURL: String,
    githubURL: String,
  },
  { timestamps: true }
);

export const Projects =
  mongoose.models.Projects || mongoose.model("Projects", ProjectsSchema);
