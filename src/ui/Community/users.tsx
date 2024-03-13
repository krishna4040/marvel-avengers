import React from "react";
import Title from "./Title";

// icons
import Face5Icon from "@mui/icons-material/Face5";
import { Typography } from "@mui/material";

type Props = {};

const Users = (props: Props) => {
  const userData = [
    { name: "karan yadav", imageSrc: "" },
    { name: "krishna jain", imageSrc: "" },
    { name: "kashni", imageSrc: "" },
    { name: "Nischay", imageSrc: "" },
  ];

  return (
    <>
      <div className="w-[25%] h-screen bg-slate-950">
        <Title iconName={Face5Icon} text="Users" desc="your followings" />

        <div className="w-full max-h-full overflow-auto flex flex-col items-start p-1">
          {userData.map((user, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between p-3 bg-slate-700 rounded-lg w-full my-3"
            >
              <img
                src={user.imageSrc}
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
                {user.name}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Users;
