"use client";

import AdminAbout from "@/components/admin/about";
import AdminContact from "@/components/admin/contact";
import AdminHome from "@/components/admin/home";
import Login from "@/components/admin/login";
import AdminProjects from "@/components/admin/projects";
import AdminSkill from "@/components/admin/skill";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Admin = () => {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState("Home");
  const [auth, setAuth] = useState(false);

  const handleLogin = (value: boolean) => {
    setAuth(value);
  };

  const handleHome = () => {
    router.push('/')
  }
  const menuItems = [
    {
      id: "Home",
      label: "Home",
      component: <AdminHome />,
    },
    {
      id: "About",
      label: "About",
      component: <AdminAbout />,
    },
    {
      id: "Skill",
      label: "Skill",
      component: <AdminSkill />,
    },
    {
      id: "Projects",
      label: "Projects",
      component: <AdminProjects />,
    },
    {
      id: "Contact",
      label: "Contact",
      component: <AdminContact />,
    },
  ];

  if (!auth) return <Login handleLogin={handleLogin} />;
  return (
    <div>
      <nav
        className="-mb-0.5 text-white flex justify-center space-x-2 md:space-x-6 border-b-2"
        role="tablist"
      >
        {menuItems.map((item) => (
          <button
            onClick={() => setSelectedTab(item.id)}
            key={item.id}
            className="py-4 px-2 font-bold md:text-xl text-lg"
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-2 py-8 px-6">
        {menuItems.map(
          (item) =>
            item.id === selectedTab && <div key={item.id}>{item.component}</div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button onClick={handleHome} className="font-bold w-16 h-8 rounded-md bg-white">戻る</button>
      </div>
    </div>
  );
};

export default Admin;
