'use client';
import React from 'react';
import quizData from '@/../public/quiz.json';
import Lottie from "lottie-react";
import { FollowerPointerCard } from '../aceternity/following-pointer';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Quiz = (props: Props) => {
  return (
    <>
      <h1 className='text-8xl mt-6 font-bold text-center'>Whats New</h1>
      <div className='w-full mt-4 h-screen flex flex-between text-center'>
        <div className='w-[50%] mx-auto '>
          <Lottie animationData={quizData} />
        </div>
        <div className='w-[50%] '>
          <div className='w-96 mx-auto my-32 '>
            <FollowerPointerCard
              className='w-full h-full  '
              title={
                <TitleComponent
                  title={"Take Quiz & Explore Merchandise"}
                  avatar={"https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-icon_149152-811.jpg"}
                />
              }
            >
              <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                </div>
                <div className="p-4">
                  <h2 className="font-bold my-4 text-lg text-zinc-700">
                    {"Quiz & Merchandise"}
                  </h2>
                  <h2 className="font-normal my-4 text-sm text-zinc-500 text-left">
                  Take this quiz and get a Chance to win upto 50% discount. This is a bigger description to make the card larger and more descriptive.The quiz covers a wide range of topics, from general knowledge to specific subjects, providing an engaging experience for participants of all ages.Do not miss this opportunity to test your knowledge and win exciting prizes!.Discover our diverse range of merchandise, featuring stylish apparel and accessories designed to complement your lifestyle.<br />With attention to quality and detail, our collection offers timeless pieces that exude sophistication and charm.Elevate your everyday look with our exclusive merchandise and make a statement wherever you go.Do not wait, explore our selection now and find the perfect pieces to express your individuality!
                  </h2>
                  <div className="flex flex-row justify-between items-center mt-10">
                    <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                      <Link className='text-white' target='_blank' href={"/quiz"}>Take Quiz & Explore Merchandise</Link>
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>
      </div>
    </>
  );
}

/* Take this quiz and get a Chance to win upto 50% discount. This is a bigger description to make the card larger and more descriptive.<br>The quiz covers a wide range of topics, from general knowledge to specific subjects, providing an engaging experience for participants of all ages.<br>Don't miss this opportunity to test your knowledge and win exciting prizes!<br>Discover our diverse range of merchandise, featuring stylish apparel and accessories designed to complement your lifestyle.<br>With attention to quality and detail, our collection offers timeless pieces that exude sophistication and charm.<br>Elevate your everyday look with our exclusive merchandise and make a statement wherever you go.<br>Don't wait, explore our selection now and find the perfect pieces to express your individuality! */

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2  items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-blue-500"
    />
    <p className='text-black'>{title}</p>
  </div>
);

export default Quiz;
