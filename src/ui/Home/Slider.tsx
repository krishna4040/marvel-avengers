"use client";
import TextTransition , {presets} from "react-text-transition"
import React , { useEffect , useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/ui/aceternity/3d-card";
import { Typography } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination , Autoplay } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css'


type Props = {};

const Slider = (props: Props) => {
  const [index , setIndex] = useState(0)
  const Text = ['Movies' , 'Series' , 'Events'];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) );
    } , 2000);
    return () => clearTimeout(intervalId);
  } , [])
  const sliderData = [
    {
      title: "Thor",
      imageSrc: "/thor.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
    {
      title: "Iron Man",
      imageSrc: "/iron-man.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
    {
      title: "Hella",
      imageSrc: "/hella.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
    {
      title: "Spiderman",
      imageSrc: "/spiderman.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
    {
      title: "Hulk",
      imageSrc: "/hulk.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
    {
      title: "Loki",
      imageSrc: "/loki.jpg",
      desc: "Thor is the god of thunder, lightning, storms, oak trees, strength, the protection of mankind, and fertility.",
    },
  ];

  return (
    <>
    <div className="w-full">
      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex items-center justify-center">
          <Typography
            variant="caption"
            component={"h2"}
            className="text-white font-black w-[100%] mx-auto mt-4 px-5 py-4 text-8xl border border-white text-center"
          >
            <TextTransition springConfig={presets.wobbly}>
              {Text[index % Text.length]}
            </TextTransition>
          </Typography>
          <Typography
            variant="caption"
            component={"span"}
            className="text-black w-[100%] bg-yellow-400 p-3 rounded-md font-black"
          >
            Latest
          </Typography>
        </div>
      </div>
      <Swiper
       effect={'coverflow'}
       grabCursor={true}
       centeredSlides={true}
       slidesPerView={3}
       autoplay={{delay: 3000}}
       loop={true}
       coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       }}

       pagination={true}
       modules={[EffectCoverflow, Pagination , Autoplay]}

      > 
        {sliderData.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderComponent
              title={item.title}
              imageSrc={item.imageSrc}
              desc = {item.desc}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
  );
};

const SliderComponent = ({
  title,
  desc,
  imageSrc,
}: {
  title: string;
  desc: string;
  imageSrc: string;
}) => {
  return (
    <CardContainer className="inter-var border-white border-solid border-2 rounded-2xl">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-2xl mx-auto font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={imageSrc}
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
