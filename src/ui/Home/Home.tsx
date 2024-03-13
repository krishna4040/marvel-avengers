import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Timeline from "./Timeline";
import Sponsers from "./Sponsers";
import Quiz from "./Quiz";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-black text-white">
        <Navbar />
        <Header />
        <Slider />
        {/* <Timeline /> */}
        <Quiz />
        <Sponsers />
      </section>
    </>
  );
};

export default Home;
