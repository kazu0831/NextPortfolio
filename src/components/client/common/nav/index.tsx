"use client";

import React from "react";

const Nav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="h-[80px] flex items-center justify-between px-6 bg-white bg-opacity-50 text-white font-bold top-0 fixed z-20 min-w-full ">
      <div className="py-6">
        <button onClick={() => scrollToSection("home")}>logo</button>
      </div>

      <ul className="flex">
        <li className="ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300">
          <button onClick={() => scrollToSection("about")}>About</button>
        </li>

        <li className="ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300">
          <button onClick={() => scrollToSection("skill")}>Skill</button>
        </li>

        <li className="ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300">
          <button onClick={() => scrollToSection("projects")}>Projects</button>
        </li>

        <li className="ml-4 w-16 text-center h-[80px] leading-[80px] hover:bg-pink-500 transition duration-300">
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
