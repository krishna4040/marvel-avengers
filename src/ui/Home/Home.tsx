import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import Slider from "./Slider";
import Navbar from "./Navbar";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-black text-white">
        <Navbar />
        <Header />
        <Slider />
      </section>
    </>
  );
};

export default Home;
