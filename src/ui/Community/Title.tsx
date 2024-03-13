import React from "react";
import { Divider, Typography } from "@mui/material";

type Props = {
  text: string;
  desc: string;
  iconName: React.ElementType;
};

const Title = (props: Props) => {
  return (
    <div className="p-1">
      <div className="flex flex-row items-center justify-center w-full p-1 gap-3">
        <props.iconName className="text-white font-black text-5xl" />
        <Typography
          variant="h3"
          component={"h1"}
          className="font-black text-white p-1 flex flex-col items-start"
        >
          {props.text}
          <Typography
            variant="caption"
            component={"span"}
            className="text-slate-600"
          >
            {props.desc}
          </Typography>
        </Typography>
      </div>
      <Divider className="bg-white h-1" />
    </div>
  );
};

export default Title;
