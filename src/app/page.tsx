import { getComics } from '@/api/comics/main'
import React from 'react'

const Page = async () => {

  const data = await getComics()
  console.log(data)

  return (
    <div>
      Home
    </div>
  )
}

export default Page