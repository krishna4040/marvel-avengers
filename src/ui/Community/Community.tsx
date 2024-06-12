import React from "react";
import Clubs from "./clubs";
import Talks from "./talks";
import Users from "./users";

type Props = {};

const Community = (props: Props) => {
  return (
    <>
      <div className="w-full h-full bg-black text-white flex flex-row items-start justify-normal">
        <Clubs />
        <Talks />
        <Users />
      </div>
    </>
  );
};

export default Community;
