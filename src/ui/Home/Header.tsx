import React from "react";
import { Typography } from "@mui/material";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <div className="w-full h-screen bg-red-200 relative">
        <video
          src="/bg-video.mp4"
          muted
          autoPlay
          loop
          className="w-full h-full aspect-video object-cover"
          style={{
            transform: "rotate(-90deg)",
          }}
        ></video>
        <div className="absolute bg-black w-full flex items-center flex-col p-3 h-full">
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
            </Typography>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Header;
