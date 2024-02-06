"use client";

import React, { useEffect, useState } from "react";

const AdminAbout = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [education, setEducation] = useState("");
  const [message, setMessage] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/about/get");

        if (res) {
          const getData = await res.json();
          setName(getData.name);
          setAge(getData.age);
          setEducation(getData.education);
          setMessage(getData.message);
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
        name: name,
        age: age,
        education: education,
        message: message,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/about/post", {
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
        name: name,
        age: age,
        education: education,
        message: message,
      };

      if (Object.values(data).some((value) => !value)) {
        return;
      }

      const res = await fetch("/api/about/update", {
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
            <label className="my-2 mt-4 text-sm font-bold">名前</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">年齢</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">学歴・資格</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">ひとこと</label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

export default AdminAbout;
