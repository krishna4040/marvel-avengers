"use client";
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-full w-full">
        <video
          src="./bg-video.mp4"
          muted
          autoPlay
          loop
          className="w-full h-screen aspect-video object-cover"
        ></video>
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 flex flex-col items-center justify-center h-screen text-left">
          <Typography
            variant="h1"
            component={"h1"}
            className="flex flex-row items-center justify-center gap-3"
          >
            Welcome to{" "}
            <Typography
              variant="h2"
              component={"span"}
              className="bg-white text-black p-3 font-black"
            >
              Marvel Headquarters
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component={"h4"}
            className="text-white font-medium text-lg"
          >
            With great power comes great responsibility.
            <Typography
              variant="subtitle2"
              component={"span"}
              className="text-red-500 bg-white p-2 ml-2 rounded-md"
            >
              `Stan Lee`
              <Image
                src={"/stanlee.jpg"}
                alt="/"
                width={50}
                height={50}
                className="bg-white rounded-full p-1 aspect-square"
              />
            </Typography>
          </Typography>
        </div>

        {showNavbar && <Navbar />}
      </div>
    </>
  );
};

export default Header;
