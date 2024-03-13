"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "@mui/material";

type Props = {};

const Navbar = (props: Props) => {
  const links = [
    {
      name: "Movies",
      link: "",
    },
    {
      name: "characters",
      link: "",
    },
    {
      name: "events",
      link: "",
    },
  ];

  return (
    <>
      <nav className="fixed w-full top-0 left-0 right-0 p-2 z-10">
        <div className="p-5 flex flex-row items-center justify-between w-fit m-auto bg-slate-900 rounded-2xl">
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
              <>
                <Link href={item.link} key={i}>
                  <Typography
                    variant="subtitle1"
                    component={"span"}
                    className="font-black text-white cursor-pointer hover:bg-slate-600 transition-all p-3"
                  >
                    {item.name}
                  </Typography>
                </Link>
              </>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
