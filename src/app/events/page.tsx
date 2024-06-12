import Events from '@/ui/AvengersInfo/Events'
import Navbar from '@/ui/Home/Navbar'
import React from 'react'

const Page = () => {
  return (
    <section className='w-screen h-screen bg-black overflow-x-hidden'>
    <Navbar />
    <div className='mt-3'>
      <Events />
    </div>
  </section>
  )
}

export default Page