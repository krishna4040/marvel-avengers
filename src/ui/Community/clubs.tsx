import React from "react";
import Title from "./Title";
import { Typography } from "@mui/material";

// icons
import Groups3Icon from "@mui/icons-material/Groups3";
import Image from "next/image";

type Props = {};

const Clubs = (props: Props) => {
  const clubData = [
    { name: "Captain America", imageSrc: "" },
    { name: "Tony-Stark", imageSrc: "" },
    { name: "Thor", imageSrc: "" },
    { name: "Hella", imageSrc: "" },
    { name: "Black-Panther", imageSrc: "" },
  ];

  return (
    <>
      <div className="w-[25%] h-screen bg-slate-950">
        <Title
          iconName={Groups3Icon}
          text="Clubs"
          desc="follow your specific interests"
        />
        <div className="w-full max-h-screen overflow-auto flex flex-col items-start p-1">
          {clubData.map((club, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between p-3 bg-slate-700 rounded-lg w-full my-3"
            >
              <Image
                src={club.imageSrc}
                alt="/"
                width={50}
                height={50}
                className="aspect-square w-11 h-11 rounded-full bg-white p-1"
              />
              <Typography
                variant="body2"
                component={"span"}
                className="font-normal text-white"
              >
                {club.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clubs;
