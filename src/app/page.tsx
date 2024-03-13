import { getComics } from '@/api/comics/main'
import { getEvents } from '@/api/events/main'
import { getSeries } from '@/api/series/main'
import { getStories } from '@/api/stories/main'
import React from 'react'

const Page = async () => {

  const data = await getSeries()
  console.log(data)

  return (
    <div>
      Home
    </div>
  )
}

export default Page