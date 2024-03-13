import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Timeline from "./Timeline";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-black text-white">
        <Navbar />
        <Header />
        <Slider />
        <Timeline />
      </section>
    </>
  );
};

export default Home;
