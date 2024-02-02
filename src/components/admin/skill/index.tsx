"use client";

import React from "react";

const AdminSkill = () => {
  return (
    <div className="min-w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <label className="my-2 mt-4 text-sm font-bold">
              使用言語・フレームワーク
            </label>
            <input
              className="border py-2 px-4 focus:outline-none"
              type="text"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="mt-4 border rounded-md bg-green-200 border-green-600 py-2 px-4 font-bold text-[16px]">
            登録
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSkill;