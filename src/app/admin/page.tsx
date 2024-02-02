"use client";

import AdminAbout from "@/components/admin/about";
import AdminContact from "@/components/admin/contact";
import AdminHome from "@/components/admin/home";
import AdminProjects from "@/components/admin/projects";
import AdminSkill from "@/components/admin/skill";
import React, { useState } from "react";

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
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
  return (
    <div>
      <nav
        className="-mb-0.5 flex justify-center space-x-2 md:space-x-6 border-b-2"
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

      <div className="mt-4 p-8">
        {menuItems.map((item) => item.id === selectedTab && item.component)}
      </div>
    </div>
  );
};

export default Admin;
