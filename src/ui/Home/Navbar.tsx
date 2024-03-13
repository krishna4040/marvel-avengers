"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

// icons
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const links = [
    {
      name: "Movies",
      link: "",
    },
    {
      name: "Characters",
      link: "",
    },
    {
      name: "Events",
      link: "",
    },
    {name: "Merchandise",
    link: "merchandise",},
    {
      name: "Forums",
    link: "",
    }
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowNavbar(currentScrollPos < prevScrollPos || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 p-2 z-10 transition-all ${
        showNavbar ? "" : "-translate-y-full"
      }`}
    >
      <div className="p-5 flex flex-row items-center justify-between w-fit m-auto bg-slate-950 rounded-2xl">
        <div className="mr-11">
          <Link href={"/"}>
            <Image
              src={"/nav-logo.jpg"}
              width={50}
              height={50}
              alt="image"
              className="cursor-pointer rounded-full"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-5 uppercase ml-10">
          {links.map((item, i) => (
            <Link href={item.link} key={i}>
              <Typography
                variant="subtitle1"
                component={"span"}
                className="font-black text-white cursor-pointer hover:bg-slate-600 transition-all p-3"
              >
                {item.name}
              </Typography>
            </Link>
          ))}

          <Link
            href={"/Auth/join"}
            className="bg-blue-950 p-3 rounded-full flex items-center justify-center"
          >
            <LoginIcon className="text-white font-black" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
