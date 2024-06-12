import Characters from '@/ui/AvengersInfo/Characters'
import Navbar from '@/ui/Home/Navbar'
import React from 'react'

const Page = () => {
  return (
    <section className='w-screen h-screen bg-black overflow-x-hidden'>
    <Navbar />
    <div className='mt-3'>
      <Characters />
    </div>
  </section>
  )
}

export default Page