"use client";

import React, { useState } from "react";

interface LoginProps {
  handleLogin: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };

      const res = await fetch("/api/login/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        handleLogin(true);
      } else {
        alert("ログインに失敗しました");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">ユーザー名</label>
            <input
              placeholder="ユーザー名"
              className="border py-2 px-4 focus:outline-none"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">パスワード</label>
            <input
              placeholder="パスワード"
              className="border py-2 px-4 focus:outline-none"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handleClick}
            className="mt-4 border rounded-md bg-green-200 border-green-600 py-2 px-4 font-bold text-[16px]"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
