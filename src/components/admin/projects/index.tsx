"use client";

import React, { useEffect, useRef, useState } from "react";

interface Project {
  _id: string;
  project: string;
  stack: string;
  webURL: string;
  githubURL: string;
}

const AdminProjects = () => {
  const idRef = useRef('')
  const [data, setData] = useState<Project[]>([]);
  const [project, setProject] = useState("");
  const [stack, setStack] = useState("");
  const [webURL, setWebURL] = useState("");
  const [githubURL, setGithubURL] = useState("");
  const [id, setId] = useState('')

  const getAllProjects = async () => {
    try {
      const res = await fetch("api/projects/getAll", {
        method: "GET",
      });

      const data = await res.json();
      setData(data);
    } catch (err) {
      alert("データの取得に失敗しました");
    }
  };

  const handleSubmit = async () => {
    try {
      const data = {
        project: project,
        stack: stack,
        webURL: webURL,
        githubURL: githubURL,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/projects/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      alert("登録しました");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      const data = {
        id: id,
        project: project,
        stack: stack,
        webURL: webURL,
        githubURL: githubURL,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/projects/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      alert("更新しました");
      getAllProjects()
    } catch (err) {
      console.log(err);
    }
  };

  const getSingleData = async (id: string) => {

    try {
      const res = await fetch(`/api/projects/getSingle?id=${id}`);

      if (res) {
        const getData = await res.json();
        setProject(getData.project);
        setStack(getData.stack);
        setWebURL(getData.webURL);
        setGithubURL(getData.githubURL);
        setId(id)
      } else {
        console.log("失敗しました");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="min-w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">
              プロジェクト概要
            </label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">技術スタック</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={stack}
              onChange={(e) => setStack(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">
              プロジェクトURL
            </label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={webURL}
              onChange={(e) => setWebURL(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">Github</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={githubURL}
              onChange={(e) => setGithubURL(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="mt-4 border rounded-md bg-green-200 border-green-600 py-2 px-4 font-bold text-[16px]"
          >
            登録
          </button>

          <button
            onClick={handleUpdate}
            className="mt-4 ml-8 border rounded-md bg-blue-400 border-blue-600 py-2 px-4 font-bold text-[16px]"
          >
            編集
          </button>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full mt-10 flex items-center justify-center">
            <h1 className="font-bold">登録済プロジェクト</h1>
          </div>
          {data.map((p, index) => (
            <button
              className="text-left w-80  mt-4 cursor-pointer text-sm font-bold border rounded p-4 mr-3"
              key={index}
              onClick={() => {
                idRef.current = p._id
                getSingleData(idRef.current)
              }}
            >
              <p>概要: {p.project}</p>
              <p>技術: {p.stack}</p>
              <p>web: {p.webURL}</p>
              <p>Git: {p.githubURL}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;
