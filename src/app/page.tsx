import { getComics } from '@/api/comics/main'
import { getEvents } from '@/api/events/main'
import React from 'react'

const Page = async () => {

  const data = await getEvents()
  console.log(data)

  return (
    <div>
      Home
    </div>
  )
}

export default Page