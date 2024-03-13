
import React from "react";
import { HomePage } from "@/ui/ComponentExporters";
import { getComics } from '@/api/comics/main'
import { getEvents } from '@/api/events/main'
import { getSeries } from '@/api/series/main'
import { getStories } from '@/api/stories/main'

const Page = async () => {

  const data = await getStories()
  console.log(data)

  return (
    <>
      <HomePage />
    </>
  );
};

export default Page;
