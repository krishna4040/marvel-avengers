"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

type Info = {
  images: string;
  id: number
}

export const ParallaxScroll = ({
  info,
  className,
  route
}: {
  info: Info[];
  className?: string;
  route: string
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const images = info.map(i => i.images)
  const router = useRouter()

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
        ref={gridRef}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
              className="cursor-pointer transition-shadow duration-300 ease-in-out"
              onClick={() => {
                // Id is compolusory here if Id not received code will crash
                const id = info.find((info) => info.images === el)?.id!
                router.push(`${route}/${id}`)
              }}
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div  whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            className="cursor-pointer transition-shadow duration-300 ease-in-out" style={{ y: translateSecond }} key={"grid-2" + idx}
              onClick={() => {
                // Id is compolusory here if Id not received code will crash
                const id = info.find((info) => info.images === el)?.id!
                router.push(`${route}/${id}`)
              }}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div  whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
            className="cursor-pointer transition-shadow duration-300 ease-in-out" style={{ y: translateThird }} key={"grid-3" + idx}
              onClick={() => {
                // Id is compolusory here if Id not received code will crash
                const id = info.find((info) => info.images === el)?.id!
                router.push(`${route}/${id}`)
              }}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
