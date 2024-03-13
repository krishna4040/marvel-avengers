import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import Sponsers from "./Sponsers";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-black text-white">
        <Navbar />
        <Header />
        <Slider />
        <Timeline />
        <Sponsers />
      </section>
    </>
  );
};

export default Home;
