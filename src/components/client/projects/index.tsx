"use client";

import { ProjectsData } from "@/types/getData";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projectsData, setProjectseData] = useState<ProjectsData[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res4 = await fetch("/api/projects/getAll", {
          cache: "no-store",
        });
        const projects = await res4.json();
        setProjectseData(projects);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="mb-20 font-bold text-4xl">Projects</h1>
      <div className="w-3/4 flex flex-wrap items-center justify-center">
        {projectsData?.map((project, index) => (
          <div
            className="border rounded-md p-3 h-80 bg-white bg-opacity-50 w-full lg:w-80 mr-8 mb-4 flex flex-col"
            key={index}
          >
            <div className="h-1/3">
              <div className="text-center font-bold text-2xl border-b">
                {project.project}
              </div>

              <small className="mt-2">使用技術：</small>
              <div>{project.stack}</div>
            </div>

            <div className="h-2/3 w-full flex flex-col">
              <Link
                className="bg-white bg-opacity-30 hover:opacity-80 text-center mt-4 border py-6 w-full rounded-md"
                href={project.webURL}
              >
                Webページ
              </Link>
              <Link
                className="bg-white bg-opacity-30 hover:opacity-80 text-center mt-4 border py-6 w-full rounded-md"
                href={project.githubURL}
              >
                Github
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
