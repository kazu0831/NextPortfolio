"use client";

import React, { useState } from "react";

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="h-[80px] flex items-center justify-between px-6 bg-white bg-opacity-50 text-white font-bold top-0 fixed z-20 min-w-full ">
      <div className="py-6">
        <button
          onClick={() => scrollToSection("home")}
          className="bg-white pl-1 pr-3 py-2 rounded-sm text-black"
        >
          <span className="p-2 mr-2 text-white bg-yellow-400 rounded-md">
            Kz
          </span>
          Portfolio
        </button>
      </div>

      {/* ハンバーガーメニュー */}
      <button
        onClick={handleMenuOpen}
        type="button"
        className="lg:hidden block z-10 space-y-2"
      >
        <div
          className={
            openMenu
              ? "w-8 h-0.5 bg-white translate-y-2.5 rotate-45"
              : "w-8 h-0.5 bg-white"
          }
        />
        <div className={openMenu ? "opacity-0" : "w-8 h-0.5 bg-white"} />
        <div
          className={
            openMenu ? "w-8 h-0.5 bg-white -rotate-45" : "w-8 h-0.5 bg-white"
          }
        />
      </button>

      {/* ハンバーガーnav */}
      <ul
        className={
          openMenu
            ? "text-center fixed bg-gray-400 bg-opacity-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3"
            : "fixed right-[-100%]"
        }
      >
        <li className="mt-20 mb-4 py-2  hover:bg-pink-500 transition duration-300">
          <button className="w-full" onClick={() => scrollToSection("about")}>
            About
          </button>
        </li>

        <li className="mb-4 py-2 hover:bg-pink-500 transition duration-300">
          <button className="w-full" onClick={() => scrollToSection("skill")}>
            Skill
          </button>
        </li>

        <li className="mb-4 py-2 hover:bg-pink-500 transition duration-300">
          <button
            className="w-full"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
        </li>

        <li className="mb-4 py-2 hover:bg-pink-500 transition duration-300">
          <button className="w-full" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </li>
      </ul>

      {/* 通常ナビゲーション */}
      <ul className="hidden lg:flex">
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
