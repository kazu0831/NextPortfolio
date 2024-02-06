"use client";

import React, { useEffect, useState } from "react";

const AdminHome = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home/get");

        if (res) {
          const getData = await res.json();
          setTitle(getData.title);
          setSubtitle(getData.subtitle);
          setId(getData._id);
        } else {
          console.log("失敗しました");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const data = {
        title: title,
        subtitle: subtitle,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/home/post", {
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
        title: title,
        subtitle: subtitle,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/home/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      alert("更新しました");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">見出し</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">小見出し</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
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
      </div>
    </div>
  );
};

export default AdminHome;
