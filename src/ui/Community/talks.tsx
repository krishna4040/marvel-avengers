import React from "react";
import Title from "./Title";

// icons
import ForumIcon from "@mui/icons-material/Forum";

type Props = {};

const Talks = (props: Props) => {
  return (
    <>
      <div className="w-[50%] h-screen bg-slate-900 relative">
        <Title
          iconName={ForumIcon}
          text="Talks"
          desc="aim of fostering learning, dialogue, and engagement within the community"
        />

        <div>{/* Messages */}</div>

        <div className="w-full absolute bottom-3">
          <input
            type="text"
            id="user-input"
            name="userInput"
            className="w-full rounded-full p-5 outline-none border-2 border-yellow-500 border-solid ring-2 ring-yellow-400 text-black"
          />
        </div>
      </div>
    </>
  );
};

export default Talks;
