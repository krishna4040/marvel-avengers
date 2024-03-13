"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/ui/aceternity/3d-card";
import { Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

type Props = {};

const Slider = (props: Props) => {
  return (
    <>
      <div>
        <Typography
          variant="caption"
          component={"h2"}
          className="text-white font-black px-5 py-4 text-8xl text-center"
        >
          {`[ Movies ]-[ Events ]-[ Comics ]`}
          <Typography
            variant="caption"
            component={"span"}
            className="text-black bg-yellow-400 p-3 rounded-md font-black"
          >
            Latest
          </Typography>
        </Typography>
        <div className="h-fit w-full flex flex-row items-center justify-start overflow-y-auto gap-16 p-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
            <SliderComponent key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

const SliderComponent = () => {
  return (
    <CardContainer className="inter-var border-white border-solid border-2 rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal"
          >
            View now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            <StarOutlineIcon />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Slider;
