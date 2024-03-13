import React from "react";
import { InfiniteMovingCards } from "../aceternity/infinite-moving-cards";

type Props = {};

const Sponsors = (props: Props) => {
  const data = [
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
    {
      imageSrc: "/bg-home.jpg",
      name: "Tony Stark",
      title: "A Tale of Two Cities",
    },
  ];

  return (
    <>
      <div className="w-full p-5">
        <InfiniteMovingComponent data={data} side={"right"} />
        <InfiniteMovingComponent data={data} side={"left"} />
      </div>
    </>
  );
};

const InfiniteMovingComponent = ({
  data,
  side,
}: {
  data: { imageSrc: string; name: string; title: string }[];
  side: "left" | "right";
}) => {
  return (
    <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={data} direction={side} speed="slow" />
    </div>
  );
};

export default Sponsors;
