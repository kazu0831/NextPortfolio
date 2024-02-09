/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { HomeData } from "@/types/getData";
import Loading from "@/app/loading";
import Fastfood from "../three";

const TOP = () => {
  const [homeData, setHomeData] = useState<HomeData | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/home/get", {
          cache: "no-store",
        });
        const home = await res.json();
        setHomeData(home);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full container relative">
      {homeData ? (
        <div className="flex flex-col items-center justify-center absolute bottom-72 left-6 md:left-24 z-10">
          <h1 className="text-center text-4xl md:text-6xl">{homeData.title}</h1>
          <p className="text-center mt-8 md:text-2xl">{homeData.subtitle}</p>
        </div>
      ) : (
        <Loading />
      )}
      <Fastfood />
    </div>
  );
};

export default TOP;
