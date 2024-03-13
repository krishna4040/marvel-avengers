import React from 'react'
import Series from '@/ui/AvengersInfo/Series'
import Navbar from '@/ui/Home/Navbar'

const Page = () => {
  return (
    <section className='w-screen h-screen bg-black overflow-x-hidden'>
      <Navbar />
      <div className='mt-3'>
        <Series />
      </div>
    </section>
  )
}

export default Page