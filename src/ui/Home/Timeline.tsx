"use client";

import React from "react";
import { Typography } from "@mui/material";
import { PinContainer } from "@/ui/aceternity/3d-pin";

// icons
import FavoriteIcon from "@mui/icons-material/Favorite";

type Props = {};

const Timeline = (props: Props) => {
  const links = [
    {
      title: "Title 1",
      desc: "Feige announced the Phase Four slate at San Diego Comic-Con, consisting of films and television event series on Disney+",
      img: "",
      link: "character/captain-america",
    },
    {
      title: "Title 2",
      desc: "Feige announced the Phase Four slate at San Diego Comic-Con, consisting of films and television event series on Disney+",
      img: "",
      link: "character/iron-man",
    },
    {
      title: "Title 3",
      desc: "Feige announced the Phase Four slate at San Diego Comic-Con, consisting of films and television event series on Disney+",
      img: "",
      link: "character/thor",
    },
    {
      title: "Title 4",
      desc: "Feige announced the Phase Four slate at San Diego Comic-Con, consisting of films and television event series on Disney+",
      img: "",
      link: "character/tony-stark",
    },
  ];

  return (
    <>
      <div className="p-5">
        <Typography
          variant="h1"
          component={"h3"}
          className="font-black flex flex-row items-center justify-center text-white text-6xl p-2 text-center gap-4"
        >
          <FavoriteIcon className="text-9xl text-red-700" />
          All you favourite Characters
          <Typography
            variant="caption"
            component={"span"}
            className="text-black bg-yellow-400 p-3 rounded-md font-black"
          >
            Latest
          </Typography>
        </Typography>

        <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory flex flex-col items-center p-5 my-3 gap-16">
          {links.map((item, i) => (
            <div className="w-full h-full snap-center bg-red-950 rounded-full">
              <AnimatedCard
                key={i}
                name={item.title}
                imageSrc={item.img}
                desc={item.desc}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const AnimatedCard = ({
  name,
  imageSrc,
  desc,
  link,
}: {
  name: string;
  imageSrc: string;
  desc: string;
  link: string;
}) => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title={link} href="/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{desc.substring(0, 50)}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img src="/bg-home.jpg" alt="/" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default Timeline;
