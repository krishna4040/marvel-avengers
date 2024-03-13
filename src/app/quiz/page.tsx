import React from "react";
import data from "./fakeData.json";
import { QuizPage } from "@/ui/ComponentExporters";

type Props = {};

const Quiz = (props: Props) => {
  return (
    <>
      <QuizPage quizData={data} />
    </>
  );
};

export default Quiz;
